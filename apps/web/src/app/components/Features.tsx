"use client";

import { TbBulb } from "react-icons/tb";

export const Features = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <h3 className="text-2xl font-bold">Features</h3>
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <h4 className="font-bold">Internal Communication</h4>
          <p>
            Stay Connected, Seamlessly With fleckt, you can have real-time
            conversations within your organization through public and private
            channels or direct messages. Share documents, exchange videos and
            audio effortlessly.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-bold">Website Integration</h4>
          <p>
            Connect Instantly with Your Customers Don&apos;t miss out on
            opportunities! Our dedicated channel integration lets your customers
            reach you directly through your website. Get instant notifications
            when a message comes in.
          </p>
          <div className="h-2"></div>
          <div className="bg-secondary/10 p-4 rounded-md relative">
            <div className="flex items-center">
              <h5 className="font-semibold">Example Use Case:</h5>
            </div>

            <div className="h-4"></div>
            <div>
              <span className="italic">Customer Support</span>
            </div>
            <div className="h-2"></div>
            <p>
              Whether you run a B2B or B2C business, enabling users to contact
              you through your website is a breeze with fleckt. A simple widget
              on your site connects to your fleckt app, allowing you to engage
              with potential customers in real-time.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-bold">Temporary Chats</h4>
          <p>
            Move away from endless email threads! Create a magic link to
            initiate real-time conversations with anyone outside your
            organization.
          </p>
          <div className="h-2"></div>
          <div className="bg-secondary/10 p-4 rounded-md relative">
            <div className="flex items-center">
              <h5 className="font-semibold">Example Use Case:</h5>
            </div>

            <div className="h-4"></div>
            <div>
              <span className="italic">Email to Real-time Conversation</span>
            </div>
            <div className="h-2"></div>
            <p>
              Emails may be the go-to platform for B2B communication, but they
              can be cumbersome for back-and-forth conversations. Use fleckt to
              create temporary channels, granting clients access via a magic
              link. You can set expiration dates for these channels, ensuring
              that after the specified date, the other party can&apos;t access
              the chat. But fear not, you&apos;ll always have access and can
              easily share the conversation transcript with your team and
              clients.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-bold">API Channels</h4>
          <p>Seamless Integration with Your Workflow.</p>
          <p>
            Enhance your workflow with{" "}
            <span className="font-bold">reflect</span>&apos;s API channels,
            enabling you to send messages directly to your channels
          </p>
          <div className="h-2"></div>
          <div className="bg-secondary/10 p-4 rounded-md relative">
            <div className="flex items-center">
              <h5 className="font-semibold">Example Use Cases:</h5>
            </div>

            <div className="h-4"></div>
            <div>
              <span className="italic">1. Waitlist Integration</span>
            </div>
            <div className="h-2"></div>
            <p>
              Building a SaaS and collecting emails via a waitlist? Connect your
              waitlist widget to a dedicated channel on fleckt. Receive instant
              notifications whenever a new sign-up occurs.
            </p>
            <div className="h-4"></div>
            <div>
              <span className="italic">2. Contact Form Integration</span>
            </div>
            <div className="h-2"></div>
            <p>
              If you&apos;re managing a B2B or B2C business, link your contact
              form to a dedicated fleckt channel. Receive new requests as
              messages, and with just one click, you can reply with a
              personalized message and a magic link, streamlining your
              communication process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
