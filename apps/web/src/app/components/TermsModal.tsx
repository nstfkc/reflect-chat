import { PropsWithChildren } from "react";
import { TbX } from "react-icons/tb";
import * as Dialog from "@radix-ui/react-dialog";

export const TermsModal = (
  props: PropsWithChildren<{ onAccept: VoidFunction }>
) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{props.children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-white/30 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] scroll-py-4 overflow-scroll max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-alt2 p-[25px] shadow-lg focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Terms and Conditions
          </Dialog.Title>
          <div className="prose">
            <h2>Introduction</h2>
            <p>
              These Terms and Conditions outline the rules and regulations for
              the use of our waiting list for Reflect. By joining our waiting
              list, you agree to comply with these Terms. Please read these
              Terms carefully before submitting your information.
            </p>

            <h2>User Information</h2>
            <ol>
              <li>
                <strong>Collection of Information:</strong> To join the waiting
                list, we require your email address. Optionally, you may also
                provide your job title. By providing this information, you
                consent to its collection and use as described in these Terms
                and our Privacy Policy.
              </li>
              <li>
                <strong>Accuracy of Information:</strong> You agree to provide
                accurate, current, and complete information. We are not
                responsible for any consequences that may arise from inaccurate
                or incomplete information provided by you.
              </li>
              <li>
                <strong>Email Communication:</strong> By joining the waiting
                list, you may receive occasional emails from us regarding
                updates, news, and promotions related to Reflect. You can
                opt-out of these communications at any time by following the
                unsubscribe link in the emails.
              </li>
            </ol>

            <h2>Use of Information</h2>
            <ol>
              <li>
                <strong>Privacy:</strong> We are committed to protecting your
                privacy and handling your personal information responsibly. We
                will not sell, trade, or rent your email address or any personal
                information to third parties for their marketing purposes.
              </li>
              <li>
                <strong>Data Security:</strong> We implement reasonable security
                measures to protect the confidentiality and integrity of your
                information. However, no data transmission over the internet can
                be guaranteed to be 100% secure. You acknowledge that you
                provide your information at your own risk.
              </li>
            </ol>

            <h2>Waiting List</h2>
            <ol>
              <li>
                <strong>No Obligation:</strong> Joining the waiting list does
                not guarantee access to the Reflect service. It is for
                informational purposes and helps us gauge interest.
              </li>
              <li>
                <strong>Priority:</strong> The order in which users join the
                waiting list does not determine priority for access to [Your
                SaaS Name] unless otherwise stated by us.
              </li>
              <li>
                <strong>Updates:</strong> We reserve the right to modify,
                suspend, or discontinue the waiting list at any time without
                notice.
              </li>
            </ol>

            <h2>Termination</h2>
            <p>
              We reserve the right to remove, suspend, or terminate your access
              to the waiting list at our discretion, without prior notice, if we
              believe you have violated these Terms or if your conduct is deemed
              harmful to us or other users.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may update these Terms from time to time, and the most current
              version will be posted on our website. It is your responsibility
              to review these Terms periodically for changes.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:info@reflect.rocks">info@reflect.rocks</a>.
            </p>

            <p>
              By joining our waiting list, you acknowledge that you have read,
              understood, and agreed to these Terms and our Privacy Policy.
            </p>

            <p>Last updated: 23.08.2023</p>
          </div>
          <div className="mt-[25px] flex justify-end sticky bottom-0">
            <Dialog.Close asChild>
              <button
                onClick={props.onAccept}
                className="bg-secondary text-primary font-semibold px-4 py-2 rounded-lg"
              >
                Accept and close
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <TbX />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
