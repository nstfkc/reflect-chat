import format from "date-fns/format";
import { Message } from "db";

export function groupItemsByCreatedAt<T extends Message>(
  items: T[]
): Record<string, T[]> {
  const groups: Record<string, T[]> = {};

  for (let item of items) {
    const date = format(new Date(item.createdAt), "eeee, LLLL do");
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(item);
  }

  return groups;
}

function uniqueById<T extends Message>(messages: T[]): T[] {
  let out: T[] = [];
  let cache: string[] = [];
  for (let message of messages) {
    if (!cache.includes(message.id)) {
      cache.push(message.id);
      out.push(message);
    }
  }
  return out;
}

export function groupMessagesInTheSameMinute<T extends Message>(
  messages: T[]
): Record<string, T[]> {
  const out: Record<string, T[]> = {};

  let prevMessage: T | undefined = undefined;
  let increment = 0;
  let timeIncrement = 0;

  for (let message of uniqueById(messages)) {
    const id = message.senderId;

    if (prevMessage) {
      if (message.id === prevMessage.id) {
        continue;
      }
      if (
        Number(format(new Date(message.createdAt), "HHmm")) -
          Number(format(new Date(prevMessage.createdAt), "HHmm")) >=
        1
      ) {
        timeIncrement++;
      }
    }

    if (prevMessage?.senderId !== id) {
      increment++;
    }

    const key = [id, timeIncrement, increment].join("-");

    if (!out[key]) {
      out[key] = [];
    }

    prevMessage = message;
    out[key].push(message);
  }

  return out;
}
