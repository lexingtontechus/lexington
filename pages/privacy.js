import React from "react";
//import Link from "next/link";
//import PropTypes from "prop-types";
import Head from "next/head";

// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
//import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Privacy({ color }) {
  return (
    <>
      <Head>
        <title>Lexington | Privacy</title>
        <meta
          property=""
          description=""
          content="Privacy & Data Protection"
          key="description"
        />
      </Head>
      <IndexNavbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Privacy Policy
                  </h1>
                  <p className="mt-4 text-lg text-slate-200">
                    The collection, usage, disclosure and process of your
                    personal information in connection with our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-slate-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="relative block py-24 lg:pt-0 bg-indigo-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-10/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-indigo-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h2 className="text-2xl font-semibold">
                      Last updated January 01, 2022
                    </h2>
                    <div className="relative w-full mb-3 mt-8">
                      <h4 className="text-xl font-semibold">
                        1. WHAT INFORMATION DO WE COLLECT?
                      </h4>
                      <h5 className="text-xl font-semibold">
                        Personal information you disclose to us
                      </h5>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        In Short: We collect personal information that you
                        provide to us.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        We collect personal information that you voluntarily
                        provide to us when you express an interest in obtaining
                        information about us or our products and Services, when
                        you participate in activities on the Website or
                        otherwise when you contact us.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        The personal information that we collect depends on the
                        context of your interactions with us and the Website,
                        the choices you make and the products and features you
                        use.
                        <br />
                        The personal information we collect may include the
                        following:
                      </p>
                      <h4 className="text-xl font-semibold">
                        Personal Information Provided by You.{" "}
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        We collect names; phone numbers; email addresses; job
                        titles; contact preferences; and other similar
                        information.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        All personal information that you provide to us must be
                        true, complete and accurate, and you must notify us of
                        any changes to such personal information.
                      </p>
                      <h4 className="text-xl font-semibold">
                        2. HOW DO WE USE YOUR INFORMATION?{" "}
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        In Short: We process your information for purposes based
                        on legitimate business interests, the fulfillment of our
                        contract with you, compliance with our legal
                        obligations, and/or your consent.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        We use personal information collected via our Website
                        for a variety of business purposes described below. We
                        process your personal information for these purposes in
                        reliance on our legitimate business interests, in order
                        to enter into or perform a contract with you, with your
                        consent, and/or for compliance with our legal
                        obligations. We indicate the specific processing grounds
                        we rely on next to each purpose listed below.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        We use the information we collect or receive:
                      </p>
                      <ul className="list-none mr-auto">
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2 ">
                            Fulfill and manage your orders. We may use your
                            information to fulfill and manage your orders,
                            payments, returns, and exchanges made through the
                            Website.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2 ">
                            Administer prize draws and competitions. We may use
                            your information to administer prize draws and
                            competitions when you elect to participate in our
                            competitions.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2 ">
                            To deliver and facilitate delivery of services to
                            the user. We may use your information to provide you
                            with the requested service.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            To respond to user inquiries/offer support to users.
                            We may use your information to respond to your
                            inquiries and solve any potential issues you might
                            have with the use of our Services.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            To send you marketing and promotional
                            communications. We and/or our third-party marketing
                            partners may use the personal information you send
                            to us for our marketing purposes, if this is in
                            accordance with your marketing preferences. <br />
                            For example, when expressing an interest in
                            obtaining information about us or our Website,
                            subscribing to marketing or otherwise contacting us,
                            we will collect personal information from you. You
                            can opt-out of our marketing emails at any time{" "}
                            <br />
                            (see the “WHAT ARE YOUR PRIVACY RIGHTS?” below).
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            Deliver targeted advertising to you. We may use your
                            information to develop and display personalized
                            content and advertising (and work with third parties
                            who do so) tailored to your interests and/or
                            location and to measure its effectiveness.
                          </span>
                        </li>
                      </ul>
                      <h4 className="text-xl font-semibold">
                        3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?{" "}
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        In Short: We only share information with your consent,
                        to comply with laws, to provide you with services, to
                        protect your rights, or to fulfill business obligations.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        We may process or share your data that we hold based on
                        the following legal basis:
                      </p>
                      <ul className="list-none mr-auto">
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            Consent: We may process your data if you have given
                            us specific consent to use your personal information
                            for a specific purpose.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            Legitimate Interests: We may process your data when
                            it is reasonably necessary to achieve our legitimate
                            business interests.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            {" "}
                            Performance of a Contract: Where we have entered
                            into a contract with you, we may process your
                            personal information to fulfill the terms of our
                            contract.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            Legal Obligations: We may disclose your information
                            where we are legally required to do so in order to
                            comply with applicable law, governmental requests, a
                            judicial proceeding, court order, or legal process,
                            such as in response to a court order or a subpoena
                            (including in response to public authorities to meet
                            national security or law enforcement requirements).
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            Vital Interests: We may disclose your information
                            where we believe it is necessary to investigate,
                            prevent, or take action regarding potential
                            violations of our policies, suspected fraud,
                            situations involving potential threats to the safety
                            of any person and illegal activities, or as evidence
                            in litigation in which we are involved.
                          </span>
                        </li>
                      </ul>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        More specifically, we may need to process your data or
                        share your personal information in the following
                        situations:
                      </p>
                      <ul className="flex flex-col lg:flex-row list-none mr-auto">
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            Business Transfers. We may share or transfer your
                            information in connection with, or during
                            negotiations of, any merger, sale of company assets,
                            financing, or acquisition of all or a portion of our
                            business to another company.
                          </span>
                        </li>
                      </ul>
                      <h4 className="text-xl font-semibold">
                        4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        In Short: We may use cookies and other tracking
                        technologies to collect and store your information.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        We may use cookies and similar tracking technologies
                        (like web beacons and pixels) to access or store
                        information. Specific information about how we use such
                        technologies and how you can refuse certain cookies is
                        set out in our Cookie Notice.
                      </p>
                      <h4 className="text-xl font-semibold">
                        5. HOW LONG DO WE KEEP YOUR INFORMATION?{" "}
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        In Short: We keep your information for as long as
                        necessary to fulfill the purposes outlined in this
                        privacy notice unless otherwise required by law.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        We will only keep your personal information for as long
                        as it is necessary for the purposes set out in this
                        privacy notice, unless a longer retention period is
                        required or permitted by law (such as tax, accounting or
                        other legal requirements). No purpose in this notice
                        will require us keeping your personal information for
                        longer than 1 year.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        When we have no ongoing legitimate business need to
                        process your personal information, we will either delete
                        or anonymize such information, or, if this is not
                        possible (for example, because your personal information
                        has been stored in backup archives), then we will
                        securely store your personal information and isolate it
                        from any further processing until deletion is possible.
                      </p>
                      <h4 className="text-xl font-semibold">
                        6. HOW DO WE KEEP YOUR INFORMATION SAFE?{" "}
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        In Short: We aim to protect your personal information
                        through a system of organizational and technical
                        security measures.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        We have implemented appropriate technical and
                        organizational security measures designed to protect the
                        security of any personal information we process.
                        However, despite our safeguards and efforts to secure
                        your information, no electronic transmission over the
                        Internet or information storage technology can be
                        guaranteed to be 100% secure, so we cannot promise or
                        guarantee that hackers, cybercriminals, or other
                        unauthorized third parties will not be able to defeat
                        our security, and improperly collect, access, steal, or
                        modify your information. Although we will do our best to
                        protect your personal information, transmission of
                        personal information to and from our Website is at your
                        own risk. You should only access the Website within a
                        secure environment.
                      </p>
                      <h4 className="text-xl font-semibold">
                        7. DO WE COLLECT INFORMATION FROM MINORS?{" "}
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        In Short: We do not knowingly collect data from or
                        market to children under 18 years of age.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        We do not knowingly solicit data from or market to
                        children under 18 years of age. By using the Website,
                        you represent that you are at least 18 or that you are
                        the parent or guardian of such a minor and consent to
                        such minor dependent’s use of the Website. If we learn
                        that personal information from users less than 18 years
                        of age has been collected, we will deactivate the
                        account and take reasonable measures to promptly delete
                        such data from our records. If you become aware of any
                        data we may have collected from children under age 18,
                        please contact us at legal@lexingtontech.us.
                      </p>
                      <h4 className="text-xl font-semibold">
                        8. WHAT ARE YOUR PRIVACY RIGHTS?{" "}
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        In Short: You may review, change, or terminate your
                        account at any time.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        If you are a resident in the EEA or UK and you believe
                        we are unlawfully processing your personal information,
                        you also have the right to complain to your local data
                        protection supervisory authority. You can find their
                        contact details here:
                        https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        If you are a resident in Switzerland, the contact
                        details for the data protection authorities are
                        available here:
                        https://www.edoeb.admin.ch/edoeb/en/home.html.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        Cookies and similar technologies: Most Web browsers are
                        set to accept cookies by default. If you prefer, you can
                        usually choose to set your browser to remove cookies and
                        to reject cookies. If you choose to remove cookies or
                        reject cookies, this could affect certain features or
                        services of our Website. To opt-out of interest-based
                        advertising by advertisers on our Website visit
                        http://www.aboutads.info/choices/.
                      </p>
                      <h4 className="text-xl font-semibold">
                        9. CONTROLS FOR DO-NOT-TRACK FEATURES{" "}
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        Most web browsers and some mobile operating systems and
                        mobile applications include a Do-Not-Track (“DNT”)
                        feature or setting you can activate to signal your
                        privacy preference not to have data about your online
                        browsing activities monitored and collected. At this
                        stage no uniform technology standard for recognizing and
                        implementing DNT signals has been finalized. As such, we
                        do not currently respond to DNT browser signals or any
                        other mechanism that automatically communicates your
                        choice not to be tracked online. If a standard for
                        online tracking is adopted that we must follow in the
                        future, we will inform you about that practice in a
                        revised version of this privacy notice.{" "}
                      </p>
                      <h4 className="text-xl font-semibold">
                        10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY
                        RIGHTS?
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        In Short: Yes, if you are a resident of California, you
                        are granted specific rights regarding access to your
                        personal information.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        California Civil Code Section 1798.83, also known as the
                        “Shine The Light” law, permits our users who are
                        California residents to request and obtain from us, once
                        a year and free of charge, information about categories
                        of personal information (if any) we disclosed to third
                        parties for direct marketing purposes and the names and
                        addresses of all third parties with which we shared
                        personal information in the immediately preceding
                        calendar year. If you are a California resident and
                        would like to make such a request, please submit your
                        request in writing to us using the contact information
                        provided below.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        If you are under 18 years of age, reside in California,
                        and have a registered account with the Website, you have
                        the right to request removal of unwanted data that you
                        publicly post on the Website. To request removal of such
                        data, please contact us using the contact information
                        provided below, and include the email address associated
                        with your account and a statement that you reside in
                        California. We will make sure the data is not publicly
                        displayed on the Website, but please be aware that the
                        data may not be completely or comprehensively removed
                        from all our systems (e.g. backups, etc.).
                      </p>
                      <h5 className="text-lg font-semibold">
                        CCPA Privacy Notice{" "}
                      </h5>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        The California Code of Regulations defines a “resident”
                        as:
                      </p>
                      <ul className="list-none mr-auto">
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            (1) every individual who is in the State of
                            California for other than a temporary or transitory
                            purpose and
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            (2) every individual who is domiciled in the State
                            of California who is outside the State of California
                            for a temporary or transitory purpose
                          </span>
                        </li>
                      </ul>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        All other individuals are defined as “non-residents.”
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        If this definition of “resident” applies to you, we must
                        adhere to certain rights and obligations regarding your
                        personal information.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        What categories of personal information do we collect?
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        We have collected the following categories of personal
                        information in the past twelve (12) months:
                      </p>
                      <div className="block w-full overflow-x-auto">
                        {/* Projects table */}
                        <table className="items-center w-full bg-transparent border-collapse">
                          <thead>
                            <tr>
                              <th
                                className={
                                  "px-6 align-text-top border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-normal font-semibold text-left " +
                                  (color === "light"
                                    ? "bg-indigo-50 text-slate-700 border-indigo-100"
                                    : "bg-indigo-600 text-slate-200 border-indigo-500")
                                }
                              >
                                Category of Personal Information
                              </th>
                              <th
                                className={
                                  "px-6 align-text-top border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                  (color === "light"
                                    ? "bg-indigo-50 text-slate-700 border-indigo-100"
                                    : "bg-indigo-600 text-slate-200 border-indigo-500")
                                }
                              >
                                Examples
                              </th>
                              <th
                                className={
                                  "px-6 align-text-top border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                  (color === "light"
                                    ? "bg-indigo-50 text-slate-700 border-indigo-100"
                                    : "bg-indigo-600 text-slate-200 border-indigo-500")
                                }
                              >
                                Collected
                              </th>
                              <th
                                className={
                                  "px-6 align-text-top border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-normal font-semibold text-left " +
                                  (color === "light"
                                    ? "bg-indigo-50 text-slate-700 border-indigo-100"
                                    : "bg-indigo-600 text-slate-200 border-indigo-500")
                                }
                              >
                                Disclosed for Business Purposes
                              </th>
                              <th
                                className={
                                  "px-6 align-text-top border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                  (color === "light"
                                    ? "bg-indigo-50 text-slate-700 border-indigo-100"
                                    : "bg-indigo-600 text-slate-200 border-indigo-500")
                                }
                              >
                                Sold
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {/*Identfiers*/}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span
                                  className={
                                    "ml-0 font-bold " +
                                    +(color === "light"
                                      ? "text-slate-600"
                                      : "text-white")
                                  }
                                >
                                  Identifiers
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Identifiers, including relating to data used to
                                identify you, such as full name, email, address,
                                birthdate (month and day), and phone number.
                                Contact details, such as real name, alias,
                                postal address, telephone or mobile contact
                                number, unique personal identifier, online
                                identifier, Internet Protocol address, email
                                address and account name
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-check-square"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <div className="flex">
                                  <i className="fas fa-times-circle"></i>
                                </div>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <div className="flex items-center">
                                  <i className="fas fa-times-circle"></i>
                                </div>
                              </td>
                            </tr>
                            {/*Personal categories*/}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span
                                  className={
                                    "ml-0 font-bold " +
                                    +(color === "light"
                                      ? "text-slate-600"
                                      : "text-white")
                                  }
                                >
                                  Personal information categories listed in the
                                  California Customer Records statute
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Name, contact information, education,
                                employment, employment history and financial
                                information
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-check-square"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>{" "}
                              </td>
                            </tr>
                            {/*Protected categories*/}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span
                                  className={
                                    "ml-0 font-bold " +
                                    +(color === "light"
                                      ? "text-slate-600"
                                      : "text-white")
                                  }
                                >
                                  Protected classification characteristics under
                                  California or federal law
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Gender and date of birth
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                            </tr>
                            {/*Commercial information*/}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span
                                  className={
                                    "ml-0 font-bold " +
                                    +(color === "light"
                                      ? "text-slate-600"
                                      : "text-white")
                                  }
                                >
                                  Commercial information
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Transaction information, purchase history,
                                account history and products or services
                                purchased, obtained, or considered, financial
                                details and payment information
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                            </tr>
                            {/*Biometric information*/}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span
                                  className={
                                    "ml-0 font-bold " +
                                    +(color === "light"
                                      ? "text-slate-600"
                                      : "text-white")
                                  }
                                >
                                  Biometric information
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Fingerprints and voiceprints
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                            </tr>
                            {/*Internet activity*/}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span
                                  className={
                                    "ml-0 font-bold " +
                                    +(color === "light"
                                      ? "text-slate-600"
                                      : "text-white")
                                  }
                                >
                                  Internet or other similiar activity
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Browsing history, search history, online
                                behavior, interest data, and interactions with
                                our and other websites, applications, systems
                                and advertisements. device information, logs, IP
                                address, and analytics data
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                            </tr>
                            {/*Geolocation data*/}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span
                                  className={
                                    "ml-0 font-bold " +
                                    +(color === "light"
                                      ? "text-slate-600"
                                      : "text-white")
                                  }
                                >
                                  Geolocation data
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Device location
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                            </tr>
                            {/*Audio, electronic, visual, thermal, olfactory, or
                            similar information*/}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span
                                  className={
                                    "ml-0 font-bold " +
                                    +(color === "light"
                                      ? "text-slate-600"
                                      : "text-white")
                                  }
                                >
                                  Audio, electronic, visual, thermal, olfactory,
                                  or similar information
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Images and audio, video or call recordings
                                created in connection with our business
                                activities, photo or avatar, videos, and
                                recordings of phone calls between you and us,
                                where permitted by law.
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                            </tr>
                            {/* Professional or employment-related information*/}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span
                                  className={
                                    "ml-0 font-bold " +
                                    +(color === "light"
                                      ? "text-slate-600"
                                      : "text-white")
                                  }
                                >
                                  Professional or employment-related information
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Business contact details in order to provide you
                                our services at a business level, job title as
                                well as work history and professional
                                qualifications if you apply for a job with us.
                                Including communication preferences, customer
                                service and communications history, personal
                                information you permit us to see when
                                interacting with us through social media, and
                                personal information you provide us in relation
                                to a question, request, inquiry, survey, contest
                                or promotion.
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                            </tr>
                            {/* Inferences drawn from other personal information */}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span
                                  className={
                                    "ml-0 font-bold " +
                                    +(color === "light"
                                      ? "text-slate-600"
                                      : "text-white")
                                  }
                                >
                                  Inferences drawn from other personal
                                  information
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Inferences drawn from any of the collected
                                personal information listed above to create a
                                profile or summary about, for example, an
                                individual’s preferences and characteristics,
                                including our predictions about your interests
                                and preferences and related Service Profile
                                Information.
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-times-circle"></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        We may also collect other personal information outside
                        of these categories instances where you interact with us
                        in-person, online, or by phone or mail in the context
                        of:
                      </p>
                      <ul className="list-none mr-auto">
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            Receiving help through our customer support
                            channels;
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            Participation in customer surveys or contests; and
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            Facilitation in the delivery of our Services and to
                            respond to your inquiries.
                          </span>
                        </li>
                      </ul>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        How do we use and share your personal information?
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        More information about our data collection and sharing
                        practices can be found in this privacy notice.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        You may contact us by email at legal@lexingtontech.us,
                        by visiting https://lexingtontech.us/contact, or by
                        referring to the contact details at the bottom of this
                        document.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        If you are using an authorized agent to exercise your
                        right to opt-out we may deny a request if the authorized
                        agent does not submit proof that they have been validly
                        authorized to act on your behalf.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        Will your information be shared with anyone else?
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        We may disclose your personal information with our
                        service providers pursuant to a written contract between
                        us and each service provider. Each service provider is a
                        for-profit entity that processes the information on our
                        behalf.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        We may use your personal information for our own
                        business purposes, such as for undertaking internal
                        research for technological development and
                        demonstration. This is not considered to be “selling” of
                        your personal data.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        Lexington has not disclosed or sold any personal
                        information to third parties for a business or
                        commercial purpose in the preceding 12 months. Lexington
                        Tech will not sell personal information in the future
                        belonging to website visitors, users and other
                        consumers.
                      </p>
                      <h5 className="text-lg font-semibold mb-2">
                        Your rights with respect to your personal data{" "}
                      </h5>
                      <h6 className="text-lg font-semibold">
                        Right to request deletion of the data – Request to
                        delete
                      </h6>
                      You can ask for the deletion of your personal information.
                      If you ask us to delete your personal information, we will
                      respect your request and delete your personal information,
                      subject to certain exceptions provided by law, such as
                      (but not limited to) the exercise by another consumer of
                      his or her right to free speech, our compliance
                      requirements resulting from a legal obligation or any
                      processing that may be required to protect against illegal
                      activities.
                      <h6 className="text-xl font-semibold">
                        Right to be informed – Request to know
                      </h6>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        Depending on the circumstances, you have a right to
                        know:
                      </p>
                      <ul className="list-none mr-auto">
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            {" "}
                            whether we collect and use your personal
                            information;
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            the categories of personal information that we
                            collect;
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            the purposes for which the collected personal
                            information is used;
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            whether we sell your personal information to third
                            parties;
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            {" "}
                            the categories of personal information that we sold
                            or disclosed for a business purpose;
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            the categories of third parties to whom the personal
                            information was sold or disclosed for a business
                            purpose; and
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            {" "}
                            the business or commercial purpose for collecting or
                            selling personal information.
                          </span>
                        </li>
                      </ul>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        In accordance with applicable law, we are not obligated
                        to provide or delete consumer information that is
                        de-identified in response to a consumer request or to
                        re-identify individual data to verify a consumer
                        request.
                      </p>
                      <h5 className="text-lg font-semibold">
                        Right to Non-Discrimination for the Exercise of a
                        Consumer’s Privacy Rights
                      </h5>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        We will not discriminate against you if you exercise
                        your privacy rights.
                      </p>
                      <h6 className="text-lg font-semibold">
                        Verification process
                      </h6>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        Upon receiving your request, we will need to verify your
                        identity to determine you are the same person about whom
                        we have the information in our system. These
                        verification efforts require us to ask you to provide
                        information so that we can match it with information you
                        have previously provided us. For instance, depending on
                        the type of request you submit, we may ask you to
                        provide certain information so that we can match the
                        information you provide with the information we already
                        have on file, or we may contact you through a
                        communication method (e.g. phone or email) that you have
                        previously provided to us. We may also use other
                        verification methods as the circumstances dictate.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        We will only use personal information provided in your
                        request to verify your identity or authority to make the
                        request. To the extent possible, we will avoid
                        requesting additional information from you for the
                        purposes of verification. If, however, we cannot verify
                        your identity from the information already maintained by
                        us, we may request that you provide additional
                        information for the purposes of verifying your identity,
                        and for security or fraud-prevention purposes. We will
                        delete such additionally provided information as soon as
                        we finish verifying you.
                      </p>
                      <h6 className="text-lg font-semibold">
                        Other privacy rights
                      </h6>
                      <ul className="list-none mr-auto">
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            {" "}
                            you may object to the processing of your personal
                            data.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            {" "}
                            you may request correction of your personal data if
                            it is incorrect or no longer relevant, or ask to
                            restrict the processing of the data.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            {" "}
                            you can designate an authorized agent to make a
                            request under the CCPA on your behalf. We may deny a
                            request from an authorized agent that does not
                            submit proof that they have been validly authorized
                            to act on your behalf in accordance with the CCPA.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-lock"></i>
                          <span className="inline-block ml-2">
                            {" "}
                            you may request to opt-out from future selling of
                            your personal information to third parties. Upon
                            receiving a request to opt-out, we will act upon the
                            request as soon as feasibly possible, but no later
                            than 15 days from the date of the request
                            submission.
                          </span>
                        </li>
                      </ul>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        To exercise these rights, you can contact us by email at
                        legal@lexingtontech.us, by visiting
                        https://lexingtontech.us/contact, or by referring to the
                        contact details at the bottom of this document. If you
                        have a complaint about how we handle your data, we would
                        like to hear from you.{" "}
                      </p>
                      <h4 className="text-xl font-semibold">
                        11. DO WE MAKE UPDATES TO THIS NOTICE?{" "}
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        In Short: Yes, we will update this notice as necessary
                        to stay compliant with relevant laws.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        We may update this privacy notice from time to time. The
                        updated version will be indicated by an updated
                        “Revised” date and the updated version will be effective
                        as soon as it is accessible. If we make material changes
                        to this privacy notice, we may notify you either by
                        prominently posting a notice of such changes or by
                        directly sending you a notification. We encourage you to
                        review this privacy notice frequently to be informed of
                        how we are protecting your information.
                      </p>
                      <h4 className="text-xl font-semibold">
                        12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?{" "}
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        If you have questions or comments about this notice, you
                        may email us at legal@lexingtontech.us or by post to:
                      </p>
                      <ul className="list-none mr-auto">
                        <li className="flex items-center">
                          <img
                            src="/logo_lxt.svg"
                            alt="Lexington LLC"
                            height="16"
                            width="16"
                          />
                          <span className="inline-block ml-2">
                            Lexington LLC
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-map-marker-alt"></i>
                          <span className="inline-block ml-2">
                            16192 Coastal Highway
                            <br />
                            Lewes, DE 19958
                            <br />
                            United States
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-at"></i>
                          <span className="inline-block ml-2">
                            legal@lexingtontech.us
                          </span>
                        </li>
                      </ul>
                      <br />
                      <h4 className="text-xl font-semibold">
                        13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                        COLLECT FROM YOU?{" "}
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-slate-700">
                        Based on the applicable laws of your country, you may
                        have the right to request access to the personal
                        information we collect from you, change that
                        information, or delete it in some circumstances. To
                        request to review, update, or delete your personal
                        information, please submit a request form by clicking
                        here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
