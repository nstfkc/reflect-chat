"use client";

import { FormEvent, useRef, useState } from "react";
import { TbCheck, TbX } from "react-icons/tb";
import { TermsModal } from "./TermsModal";

export const WaitingList = (props: { vertical?: boolean }) => {
  const { vertical = false } = props;
  return (
    <div>
      <span className="text-2xl font-bold">Join to the waiting list</span>
      <div
        className={[
          "flex flex-col items-start gap-8 rounded-lg p-4",
          vertical ? "md:flex-col" : "md:flex-row",
        ].join(" ")}
      >
        <div className={["w-full", vertical ? "w-full" : "md:w-1/2"].join(" ")}>
          <div className="font-semibold">By joining to the waiting:</div>
          <ul className="list-disc list-inside pl-4">
            <li>
              You will have lifelong <strong>50%</strong> discount(*)
            </li>
            <li>You will get access to the reflect private community</li>
            <li>You will be able to make feature requests</li>
            <li>You have early access to the beta apps</li>
            <li>You will have access to the development discussions</li>
          </ul>

          <div>
            <small>(*) Discount will apply to a single organisation</small>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <WaitingListForm />
        </div>
      </div>
    </div>
  );
};

function validateEmail(email: string) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

export const WaitingListForm = () => {
  const [email, setEmail] = useState("");
  const [agreedToReceiveUpdates, setAgreedToReceiveUpdates] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<
    "idle" | "success" | "failed" | "pending"
  >("idle");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setStatus("pending");

    fetch("/api/waitingListSignUp", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, agreedToReceiveUpdates }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          setStatus("success");
        } else {
          setStatus("failed");
        }
      })
      .catch((err) => console.log(err));
  };

  if (status === "success") {
    return (
      <div className="">
        <div className="bg-primary p-4 rounded-md flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div className="bg-alt2 rounded-full w-8 h-8 flex justify-center items-center">
              <TbCheck className="text-xl" />
            </div>
            <span className="text-lg font-bold">We received your request!</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>Please try again later or </p>
            <p>We will send you an invitation code to your email.</p>
            <p>
              If you don&apos;t hear from us or somehow we fail to send you an
              email, feel free to reach us on X (f.k.a twitter) by clicking{" "}
              <a
                target="_blank"
                className="font-bold"
                rel="noopener noreferrer"
                href="https://x.com/nstfkc"
              >
                here
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div>
        <div className="bg-primary p-4 rounded-md flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <div className="bg-alt2 rounded-full w-8 h-8 flex justify-center items-center">
                <TbX className="text-xl" />
              </div>
              <span className="text-lg font-bold">Something went wrong :(</span>
            </div>
            <div className="flex flex-col gap-2">
              <p>Please try again later or</p>
              <p>
                reach us on X (f.k.a twitter) by clicking{" "}
                <a
                  target="_blank"
                  className="font-bold"
                  rel="noopener noreferrer"
                  href="https://x.com/nstfkc"
                >
                  here
                </a>
              </p>
            </div>
            <div>
              <button
                onClick={() => setStatus("idle")}
                className="bg-secondary text-primary px-8 py-2 rounded-md font-semibold disabled:opacity-50"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const isValidEmail = validateEmail(email);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email" className="text-xs font-semibold">
            Email
          </label>
          <input
            ref={emailRef}
            className="bg-white/60 w-full rounded-md px-2 py-1 outline-alt1"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input
              className="accent-secondary"
              type="checkbox"
              id="updates"
              name="updates"
              onChange={() => setAgreedToReceiveUpdates((s) => !s)}
              checked={agreedToReceiveUpdates}
            />
            <label htmlFor="updates" className="">
              I want to receive updates as email
            </label>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <input
                className="accent-secondary"
                type="checkbox"
                id="terms"
                name="terms"
                onChange={() => setTermsAccepted((s) => !s)}
                checked={termsAccepted}
              />
              <label htmlFor="terms" className="">
                I accept terms and conditions
              </label>
            </div>

            <TermsModal
              onAccept={() => {
                setTermsAccepted(true);
                setTimeout(() => {
                  emailRef.current.focus();
                }, 100);
              }}
            >
              <button className="font-bold text-sm underline outline-alt2">
                Terms and conditions
              </button>
            </TermsModal>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            disabled={!termsAccepted || status === "pending" || !isValidEmail}
            type="submit"
            className="bg-secondary text-primary px-8 py-2 rounded-md font-semibold outline-alt2 disabled:opacity-50"
          >
            Join
          </button>
        </div>
      </div>
    </form>
  );
};
