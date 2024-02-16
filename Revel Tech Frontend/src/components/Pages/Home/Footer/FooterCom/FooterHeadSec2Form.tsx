import { FormEvent } from "react";

export default function FooterHeadSecForm() {
  return (
    <div className="space-y-3">
      <h1 className="text-lg font-medium">Subscription</h1>
      <p className="max-w-[300px] text-sm font-medium opacity-90">
        Register now to get updates on promotions and coupons
      </p>
      <form
        className="flex"
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
        }}
      >
        <input
          type="email"
          name=""
          id=""
          className="border rounded-l-lg focus:outline-none px-4 text-[0.8rem] font-medium w-[250px]"
          placeholder="Enter your email address"
        />
        <button className="bg-gradient-to-br from-[#AB86F7] from-15%  to-[#68D6FD] to-85% px-6 py-3 text-white text-sm font-medium footer-form">
          Subscribe
        </button>
      </form>
    </div>
  );
}
