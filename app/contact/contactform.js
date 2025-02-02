import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mvoloyzk");

  if (state.succeeded) {
    return (
      <div className="block uppercase text-md font-bold mb-2">
        Thanks for reaching out, our team will get in touch with you soon!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative mb-2 ">
        <label
          htmlFor="full-name"
          className="block uppercase text-md font-bold mb-2 text-primary"
        >
          Full Name
        </label>
        <input
          className="input validator mt-2 block w-full p-2"
          pattern="^[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$"
          minLength="2"
          maxLength="30"
          type="input"
          name="name"
          id="full-name"
          placeholder="First and Last"
          required
        />
        <p className="validator-hint hidden">
          Please enter your first & last name
        </p>
        <label
          htmlFor="email"
          className="block uppercase text-md font-bold my-2 text-primary"
        >
          Email address
        </label>
        <input
          className="input validator mt-2 w-full p-2"
          id="email"
          type="email"
          name="email"
          placeholder="Your email address"
          required
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        />
        <p className="validator-hint hidden">
          Enter valid email address,{" "}
          <span className="lowercase">e.g. name@company.com</span>
        </p>

        <label className="block uppercase text-md font-bold my-2 text-primary">
          Inquiry type
          <select
            className="select validator block w-full mt-2 text-sm h-8 bg-base-300 px-2"
            name="inquiry"
            id="inquiry"
            required
          >
            <option disabled defaultValue="">
              Select an inquiry type
            </option>
            <option value="AI">AI Applications</option>
            <option value="Blockchain">Blockchain</option>
            <option value="SmartFX">SmartFX</option>
            <option value="Web3IPFS">Web 3.0 + IPFS</option>
            <option value="Working with Btab Group">
              Working with Btab Group
            </option>
          </select>
          <p className="validator-hint">Please select an option.</p>
        </label>

        <label
          htmlFor="message"
          className="block uppercase text-md font-bold my-2 text-primary"
        >
          Your message
        </label>
        <textarea
          className="mt-2 mb-2 block w-full p-2"
          rows="3"
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <input
          type="hidden"
          name="_inquiry"
          id="email-subject"
          value="Website Inquiry"
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="hover:bg-accent btn btn-secondary uppercase text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 my-2 w-full ease-linear transition-all duration-150"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
