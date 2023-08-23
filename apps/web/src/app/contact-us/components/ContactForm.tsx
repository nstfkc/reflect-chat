"use client";
import { TermsModal } from "@/app/components/TermsModal";
import { FormEvent, useState } from "react";
import { TbCheck, TbX } from "react-icons/tb";

function validateEmail(email: string) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [agreedToReceiveUpdates, setAgreedToReceiveUpdates] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const isValidEmail = validateEmail(email);
  const [status, setStatus] = useState<
    "idle" | "success" | "failed" | "pending"
  >("idle");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setStatus("pending");

    fetch("/api/createContactFormEntry", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email,
        jobTitle,
        description,
        agreedToReceiveUpdates,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          setStatus("success");
        } else {
          setStatus("failed");
        }
      })
      .catch((err) => {
        console.log(err);
        setStatus("failed");
      });
  };

  if (status === "success") {
    return (
      <div className="py-4">
        <div className="bg-alt2 p-4 rounded-md flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div className="bg-primary rounded-full w-8 h-8 flex justify-center items-center">
              <TbCheck className="text-xl" />
            </div>
            <span className="text-lg font-bold">We received your message!</span>
          </div>
          <div>
            We will get back to you as soon as possible. Thanks for your
            patience. If you don&apos;t want to wait click{" "}
            <a
              target="_blank"
              className="font-bold"
              rel="noopener noreferrer"
              href="https://x.com/nstfkc"
            >
              here
            </a>{" "}
            to send us a DM on X (f.k.a twitter).
          </div>
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="py-4">
        <div className="bg-alt2 p-2 rounded-md flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div className="bg-primary rounded-full w-8 h-8 flex justify-center items-center">
              <TbX className="text-xl" />
            </div>
            <span className="text-lg font-bold">Something went wrong!</span>
          </div>
          <div>
            We couldn&apos;t receive your information. Please try again later or
            click{" "}
            <a
              target="_blank"
              className="font-bold"
              rel="noopener noreferrer"
              href="https://x.com/nstfkc"
            >
              here
            </a>{" "}
            to send us a DM on X (f.k.a twitter).
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 py-4">
        <div className="flex flex-col gap-0">
          <label className="text-sm font-bold" htmlFor="email">
            Email
          </label>
          <input
            autoFocus={true}
            className="p-2 rounded-lg outline-alt1"
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-0">
          <label className="text-sm font-bold" htmlFor="jobTitle">
            Job Title (optional)
          </label>
          <input
            className="p-2 rounded-lg outline-alt1"
            type="jobTitle"
            id="jobTitle"
            name="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-0">
          <label className="text-sm font-bold" htmlFor="details">
            Details (optional)
          </label>
          <textarea
            className="p-2 rounded-lg resize-none outline-alt1"
            name="details"
            id="details"
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
      </div>
      <div className="flex flex-col gap-4">
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

          <TermsModal onAccept={() => setTermsAccepted(true)}>
            <button className="font-bold text-sm underline outline-alt2">
              Terms and conditions
            </button>
          </TermsModal>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-secondary text-primary px-4 py-2 rounded-lg disabled:opacity-50"
          type="submit"
          disabled={status === "pending" || !termsAccepted || !isValidEmail}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
