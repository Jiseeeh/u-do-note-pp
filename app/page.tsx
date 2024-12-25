import Image from "next/image";

export default function Home() {
  return (
    <main className={"container mx-auto py-10 px-5"}>
      <section className={"flex w-full justify-center items-center space-x-2"}>
        <span>powered by</span>
        <Image
          src={"/Termly-Logo.webp"}
          alt={"Logo of Termly"}
          width={100}
          height={100}
        />
      </section>
      <article className={"text-justify"}>
        <section className={"space-y-5 mb-5"}>
          <h1 className={"uppercase font-black text-2xl"}>Privacy Policy</h1>

          <p className={"text-gray-400 "}>
            Last updated <time dateTime={"2024-12-23"}>December 23, 2024</time>
          </p>

          <p>
            This Privacy Notice for U Do Note (&quot;
            <span className={"font-bold"}>we</span>,&quot; &quot;
            <span className={"font-bold"}>us</span>,&quot; or &quot;
            <span className={"font-bold"}>our</span>&quot;), describes how and
            why we might access, collect, store, use, and/or share (&quot;
            <span className={"font-bold"}>process</span>&quot;) your personal
            information when you use our services (&quot;
            <span className={"font-bold"}>Services</span>&quot;), including when
            you:
          </p>

          <ul className={"u-list"}>
            <li>
              Download and use our mobile application (U Do Note), or any other
              application of ours that links to this Privacy Notice
            </li>
            <li>
              Engage with us in other related ways, including any sales,
              marketing, or events
            </li>
          </ul>
          <p>
            <strong>Questions or concerns?</strong> Reading this Privacy Notice
            will help you understand your privacy rights and choices. We are
            responsible for making decisions about how your personal information
            is processed. If you do not agree with our policies and practices,
            please do not use our Services. If you still have any questions or
            concerns, please contact us at{" "}
            <a className={"link"} href={"mailto:johncarlo.camara@gmail.com"}>
              johncarlo.camara@gmail.com.
            </a>
          </p>
        </section>
        <section className={"space-y-5 "}>
          <h2 className={"subheading "}>Summary of key points</h2>
          <p className={"font-bold italic"}>
            This summary provides key points from our Privacy Notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our{" "}
            <a className={"link"} href={"#toc"}>
              table of contents{" "}
            </a>{" "}
            below to find the section you are looking for.
          </p>
          <p>
            <strong>What personal information do we process?</strong> When you
            visit, use, or navigate our Services, we may process personal
            information depending on how you interact with us and the Services,
            the choices you make, and the products and features you use.{" "}
            <a className={"link"} href={"#privacy"}>
              {" "}
              Learn more about personal information you disclose to us.
            </a>
          </p>
          <p>
            <strong>Do we process any sensitive personal information?</strong>{" "}
            Some of the information may be considered &quot;special&quot; or
            &quot;sensitive&quot; in certain jurisdictions, for example your
            racial or ethnic origins, sexual orientation, and religious beliefs.
            We do not process sensitive personal information.
          </p>
          <p>
            <strong>Do we collect any information from third parties?</strong>{" "}
            We do not collect any information from third parties.
          </p>
          <p>
            <strong>How do we process your information?</strong> We process your
            information to provide, improve, and administer our Services,
            communicate with you, for security and fraud prevention, and to
            comply with law. We may also process your information for other
            purposes with your consent. We process your information only when we
            have a valid legal reason to do so. Learn more about{" "}
            <a className={"link"} href={"#process-info"}>
              how we process your information.
            </a>
          </p>
          <p>
            <strong>
              In what situations and with which parties do we share personal
              information?
            </strong>{" "}
            We may share information in specific situations and with specific
            third parties. Learn more about{" "}
            <a className={"link"} href={"#share-info"}>
              when and with whom we share your personal information.
            </a>
          </p>
          <p>
            <strong>How do we keep your information safe?</strong> We have
            adequate organizational and technical processes and procedures in
            place to protect your personal information. However, no electronic
            transmission over the internet or information storage technology can
            be guaranteed to be 100% secure, so we cannot promise or guarantee
            that hackers, cyber criminals, or other unauthorized third parties
            will not be able to defeat our security and improperly collect,
            access, steal, or modify your information. Learn more about{" "}
            <a className={"link"} href={"#safe-info"}>
              how we keep your information safe.
            </a>
          </p>
          <p>
            <strong>What are your rights?</strong> Depending on where you are
            located geographically, the applicable privacy law may mean you have
            certain rights regarding your personal information. Learn more about
            your
            <a className={"link"} href={"#privacy-rights"}>
              {" "}
              privacy rights.
            </a>
          </p>
          <p>
            <strong>How do you exercise your rights?</strong> The easiest way to
            exercise your rights is by submitting a{" "}
            <a className={"link"} href={"https://forms.gle/EANF2wRBquiTb7bW6"}>
              data subject access request
            </a>
            , or by contacting us. We will consider and act upon any request in
            accordance with applicable data protection laws.
          </p>
          <p>
            Want to learn more about what we do with any information we collect?
            <a className={"link"} href={"#privacy"}>
              {" "}
              Review the Privacy Notice in full.
            </a>
          </p>
        </section>

        {/* TABLE OF CONTENTS */}
        <section className={"mb-10"}>
          <p id={"toc"} className={"subheading mt-10 mb-5"}>
            Table of Contents
          </p>
          <ol className="list-decimal list-inside">
            <li>
              <a className={"link uppercase"} href={"#privacy"}>
                WHAT INFORMATION DO WE COLLECT?
              </a>
            </li>
            <li>
              <a className={"link uppercase"} href={"#process-info"}>
                HOW DO WE PROCESS YOUR INFORMATION?
              </a>
            </li>
            <li>
              <a className={"link uppercase"} href={"#share-info"}>
                WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </a>
            </li>
            <li>
              <a className={"link uppercase"} href={"#ai-products"}>
                DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
              </a>
            </li>
            <li>
              <a className={"link uppercase"} href={"#social-logins"}>
                HOW DO WE HANDLE YOUR SOCIAL LOGINS?
              </a>
            </li>
            <li>
              <a className={"link uppercase"} href={"#keeping-info"}>
                HOW LONG DO WE KEEP YOUR INFORMATION?
              </a>
            </li>
            <li>
              <a className={"link uppercase"} href={"#safe-info"}>
                HOW DO WE KEEP YOUR INFORMATION SAFE?
              </a>
            </li>
            <li>
              <a className={"link uppercase"} href={"#minor-info"}>
                DO WE COLLECT INFORMATION FROM MINORS?
              </a>
            </li>
            <li>
              <a className={"link uppercase"} href={"#privacy-rights"}>
                WHAT ARE YOUR PRIVACY RIGHTS?
              </a>
            </li>
            <li>
              <a className={"link uppercase"} href={"#do-not-track"}>
                CONTROLS FOR DO-NOT-TRACK FEATURES
              </a>
            </li>
            <li>
              <a className={"link uppercase"} href={"#notice-update"}>
                DO WE MAKE UPDATES TO THIS NOTICE?
              </a>
            </li>
            <li>
              <a className={"link uppercase"} href={"#contact-notice"}>
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </a>
            </li>
            <li>
              <a className={"link uppercase"} href={"#modify-data"}>
                HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                YOU?
              </a>
            </li>
          </ol>
        </section>

        <section id={"privacy"} className={"space-y-5 mb-10"}>
          <p className={"subheading"}>1. WHAT INFORMATION DO WE COLLECT?</p>
          <p className={"font-bold"}>Personal information you disclose to us</p>
          <p>
            <span className={"italic font-bold"}>In Short:</span> We collect
            personal information that you provide to us.
          </p>
          <p>
            We collect personal information that you voluntarily provide to us
            when you register on the Services, express an interest in obtaining
            information about us or our products and Services, when you
            participate in activities on the Services, or otherwise when you
            contact us.
          </p>
          <p>
            <strong>Personal Information Provided by You.</strong> The personal
            information that we collect depends on the context of your
            interactions with us and the Services, the choices you make, and the
            products and features you use. The personal information we collect
            may include the following:
          </p>
          <ul className={"u-list"}>
            <li>names</li>
            <li>email addresses</li>
            <li>usernames</li>
            <li>passwords</li>
          </ul>
          <p>
            <strong>Sensitive Information.</strong> We do not process sensitive
            information.
          </p>
          <p>
            <strong>Social Media Login Data.</strong> We may provide you with
            the option to register with us using your existing social media
            account details, like your Facebook, X, or other social media
            account. If you choose to register in this way, we will collect
            certain profile information about you from the social media
            provider, as described in the section called
            <a className={"link"} href={"#processHeading"}>
              {" "}
              &quot;HOW DO WE HANDLE YOUR SOCIAL LOGINS?&quot;{" "}
            </a>{" "}
            below.
          </p>
          <p>
            <strong>Application Data.</strong> If you use our application(s), we
            also may collect the following information if you choose to provide
            us with access or permission:
          </p>
          <ul className={"u-list"}>
            <li>
              Mobile Device Access. We may request access or permission to
              certain features from your mobile device, including your mobile
              device&apos;s camera, microphone, storage, and other features. If
              you wish to change our access or permissions, you may do so in
              your device&apos;s settings.
            </li>
            <li>
              Push Notifications. We may request to send you push notifications
              regarding your account or certain features of the application(s).
              If you wish to opt out from receiving these types of
              communications, you may turn them off in your device&apos;s
              settings.
            </li>
          </ul>
          <p>
            This information is primarily needed to maintain the security and
            operation of our application(s), for troubleshooting, and for our
            internal analytics and reporting purposes.
          </p>
          <p>
            All personal information that you provide to us must be true,
            complete, and accurate, and you must notify us of any changes to
            such personal information.
          </p>
          <p className={"font-bold"}>Google API</p>
          <p>
            Our use of information received from Google APIs will adhere to{" "}
            <a
              className={"link"}
              href={
                "https://developers.google.com/terms/api-services-user-data-policy"
              }
            >
              Google API Services User Data Policy
            </a>
            , including the{" "}
            <a
              className={"link"}
              href={
                "https://developers.google.com/terms/api-services-user-data-policy#limited-use"
              }
            >
              Limited Use requirements.
            </a>
          </p>
        </section>

        <section id={"process-info"} className={"space-y-5 mb-10"}>
          <p className={"subheading"}>2. HOW DO WE PROCESS YOUR INFORMATION?</p>
          <p className={"italic"}>
            <strong>In Short:</strong> We process your information to provide,
            improve, and administer our Services, communicate with you, for
            security and fraud prevention, and to comply with law We may also
            process your information for other purposes with your consent.
          </p>
          <p>
            <strong>
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </strong>
          </p>
          <ul className={"u-list"}>
            <li>
              <strong>
                To facilitate account creation and authentication and otherwise
                manage user accounts.
              </strong>{" "}
              We may process your information so you can create and log in to
              your account, as well as keep your account in working order.
            </li>
            <li>
              <strong>To enable user-to-user communications.</strong> We may
              process your information if you choose to use any of our offerings
              that allow for communication with another user.
            </li>
          </ul>
        </section>

        <section id={"share-info"} className={"space-y-5 mb-10"}>
          <p className={"subheading"}>
            3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </p>
          <p className={"italic"}>
            <strong>In Short:</strong> We may share information in specific
            situations described in this section and/or with the following third
            parties.
          </p>
          <p>
            Vendors, Consultants, and Other Third-Party Service Providers. We
            may share your data with third-party vendors, service providers,
            contractors, or agents (&quot;third parties&quot;) who perform
            services for us or on our behalf and require access to such
            information to do that work.
          </p>
          <p>
            The third parties we may share personal information with are as
            follows:
          </p>
          <ul
            className={
              "u-list [&>*:nth-child(even)]:list-none [&>*:nth-child(even)]:pl-6 [&>*:nth-child(odd)]:font-bold space-y-5"
            }
          >
            <li>AI Service Providers</li>
            <li>Open AI</li>
            <li>Allow Users to Connect to Their Third-Party Accounts</li>
            <li>Google Account</li>
            <li>Functionality and Infrastructure Optimizations</li>
            <li>Cloud Firestore and Cloud Storage for Firebase</li>
            <li>User Account Registration and Authentication</li>
            <li>Firebase Authentication</li>
            <li>App Performance Monitoring</li>
            <li>Firebase Crash Reporting</li>
          </ul>
          <p>
            We also may need to share your personal information in the following
            situations:
          </p>
          <ul className={"u-list"}>
            <li>
              <strong>Business Transfers.</strong> We may share or transfer your
              information in connection with, or during negotiations of, any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business to another company.
            </li>
          </ul>
        </section>

        <section id={"ai-products"} className={"space-y-5 mb-10"}>
          <p className={"subheading"}>
            4. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
          </p>
          <p className={"italic"}>
            <strong>In Short:</strong> We offer products, features, or tools
            powered by artificial intelligence, machine learning, or similar
            technologies. As part of our Services, we offer products, features,
            or tools powered by artificial intelligence, machine learning, or
            similar technologies (collectively, &quot;AI Products&quot;). These
            tools are designed to enhance your experience and provide you with
            innovative solutions. The terms in this Privacy Notice govern your
            use of the Al Products within our Services.
          </p>
          <p className={"font-bold"}>Use of AI Technologies</p>
          <p>
            We provide the Al Products through third-party service providers
            (&quot;AI Service Providers&quot;), including OpenAl. As outlined in
            this Privacy Notice, your input, output, and personal information
            will be shared with and processed by these Al Service Providers to
            enable your use of our Al Products for purposes outlined in{" "}
            <a className={"link"} href={"#shareHeading"}>
              &quot;WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
              INFORMATION?&quot;
            </a>
            You must not use the Al Products in any way that violates the terms
            or policies of any Al Service Provider.
          </p>
          <p className={"font-bold"}>Our AI Products</p>
          <p>Our AI Products are designed for the following functions:</p>
          <ul className={"u-list"}>
            <li>Text Analysis</li>
            <li>AI predictive analytics</li>
          </ul>
          <p className={"font-bold"}>How We Process Your Data Using AI</p>
          <p>
            All personal information processed using our Al Products is handled
            in line with our Privacy Notice and our agreement with third
            parties. This ensures high security and safeguards your personal
            information throughout the process, giving you peace of mind about
            your data&apos;s safety.
          </p>
        </section>

        <section id={"social-logins"} className={"space-y-5 mb-10"}>
          <p className={"subheading"}>
            5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
          </p>
          <p className={"italic"}>
            <strong>In Short:</strong> If you choose to register or log in to
            our Services using a social media account, we may have access to
            certain information about you.
          </p>

          <p>
            Our Services offer you the ability to register and log in using your
            Google account details. When you choose to do this, we will receive
            certain profile information about you from Google. The profile
            information we receive may vary depending on your Google account
            settings but will often include your name, email address, profile
            picture, and any other information you choose to make available.
          </p>

          <p>
            We will use the information we receive only for the purposes that
            are described in this Privacy Notice or that are otherwise made
            clear to you on the relevant Services. Please note that we do not
            control, and are not responsible for, other uses of your personal
            information by your third-party social media provider. We recommend
            that you review their privacy notice to understand how they collect,
            use, and share your personal information, and how you can set your
            privacy preferences on their sites and apps.
          </p>
        </section>

        <section id={"keeping-info"} className={"space-y-5 mb-10"}>
          <p className={"subheading"}>
            6. HOW LONG DO WE KEEP YOUR INFORMATION?
          </p>
          <p className={"italic"}>
            <strong>In Short:</strong> We keep your information for as long as
            necessary to fulfill the purposes outlined in this Privacy Notice
            unless otherwise required by law.
          </p>
          <p>
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this Privacy Notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting, or other legal requirements). No purpose in this
            notice will require us keeping your personal information for longer
            than the period of time in which users have an account with us.
          </p>

          <p>
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymize such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
          </p>
        </section>

        <section id={"safe-info"} className={"space-y-5 mb-10"}>
          <p className={"subheading"}>
            7. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </p>
          <p className={"italic"}>
            <strong>In Short:</strong> We aim to protect your personal
            information through a system of organizational and technical
            security measures.
          </p>
          <p>
            We have implemented appropriate and reasonable technical and
            organizational security measures designed to protect the security of
            any personal information we process. However, despite our safeguards
            and efforts to secure your information, no electronic transmission
            over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that
            hackers, cyber criminals, or other unauthorized third parties will
            not be able to defeat our security and improperly collect, access,
            steal, or modify your information. Although we will do our best to
            protect your personal information, transmission of personal
            information to and from our Services is at your own risk. You should
            only access the Services within a secure environment.
          </p>
        </section>

        <section id={"minor-info"} className={"space-y-5 mb-10"}>
          <p className={"subheading"}>
            8. DO WE COLLECT INFORMATION FROM MINORS?
          </p>
          <p className={"italic"}>
            <strong>In Short:</strong> We do not knowingly collect data from or
            market to children under f 8 years of age.
          </p>
          <p>
            We do not knowingly collect, solicit data from, or market to
            children under 18 years of age, nor do we knowingly sell such
            personal information. By using the Services, you represent that you
            are at least 18 or that you are the parent or guardian of such a
            minor and consent to such minor dependent&apos;s use of the
            Services. If we learn that personal information from users less than
            18 years of age has been collected, we will deactivate the account
            and take reasonable measures to promptly delete such data from our
            records. If you become aware of any data we may have collected from
            children under age 18, please contact us at
            <a className={"link"} href={"mailto:johncarlo.camara@gmail.com"}>
              {" "}
              johncarlo.camara@gmail.com.
            </a>
          </p>
        </section>

        <section id={"privacy-rights"} className="space-y-5 mb-10">
          <p className={"subheading"}>9. WHAT ARE YOUR PRIVACY RIGHTS?</p>
          <p className={"italic"}>
            <strong>In Short:</strong> You may review, change, or terminate your
            account at any time, depending on your country province, or state of
            residence.
          </p>
          <p>
            <u>
              <strong>Withdrawing your consent:</strong>
            </u>{" "}
            If we are relying on your consent to process your personal
            information, which may be express and/or implied consent depending
            on the applicable law, you have the right to withdraw your consent
            at any time. You can withdraw your consent at any time by contacting
            us by using the contact details provided in the section{" "}
            <a className={"link"} href={"#contact-notice"}>
              &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot;
            </a>{" "}
            below.
          </p>
          <p>
            However, please note that this will not affect the lawfulness of the
            processing before its withdrawal nor, when applicable law allows,
            will it affect the processing of your personal information conducted
            in reliance on lawful processing grounds other than consent.
          </p>
          <p className={"font-bold"}>Account Information</p>
          <p>
            If you would at any time like to review or change the information in
            your account or terminate your account, you can:
          </p>
          <ul className={"u-list"}>
            <li>
              Log in to your account settings and update your user account.
            </li>
          </ul>
          <p>
            Upon your request to terminate your account, we will deactivate or
            delete your account and information from our active databases.
            However, we may retain some information in our files to prevent
            fraud, troubleshoot problems, assist with any investigations,
            enforce our legal terms and/or comply with applicable legal
            requirements.
          </p>
          <p>
            If you have questions or comments about your privacy rights, you may
            email us at{" "}
            <a className={"link"} href={"mailto:johncarlo.camara@gmail.com"}>
              johncarlo.camara@gmail.com.
            </a>
          </p>
        </section>

        <section id={"do-not-track"} className={"space-y-5 mb-10"}>
          <p className={"subheading"}>10. CONTROLS FOR DO-NOT-TRACK FEATURES</p>
          <p>
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track (&quot;DNT&quot;) feature or
            setting you can activate to signal your privacy preference not to
            have data about your online browsing activities monitored and
            collected. At this stage, no uniform technology standard for
            recognizing and implementing DNT signals has been finalized. As
            such, we do not currently respond to DNT browser signals or any
            other mechanism that automatically communicates your choice not to
            be tracked online. If a standard for online tracking is adopted that
            we must follow in the future, we will inform you about that practice
            in a revised version of this Privacy Notice.
          </p>
        </section>

        <section id={"notice-update"} className={"space-y-5 mb-10"}>
          <p className={"subheading"}>11. DO WE MAKE UPDATES TO THIS NOTICE?</p>
          <p className={"italic"}>
            <strong>In Short:</strong> Yes, we will update this notice as
            necessary to stay compliant with relevant laws.
          </p>
          <p>
            We may update this Privacy Notice from time to time. The updated
            version will be indicated by an updated &quot;Revised&quot; date at
            the top of this Privacy Notice. If we make material changes to this
            Privacy Notice, we may notify you either by prominently posting a
            notice of such changes or by directly sending you a notification. We
            encourage you to review this Privacy Notice frequently to be
            informed of how we are protecting your information.
          </p>
        </section>

        <section id={"contact-notice"} className={"space-y-5 mb-10"}>
          <p className={"subheading"}>
            12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </p>
          <p>
            If you have questions or comments about this notice, you may email
            the developers of U Do Note,{" "}
            <a className={"link"} href={"mailto:johncarlo.camara@gmail.com"}>
              johncarlo.camara@gmail.com
            </a>
            , and
            <a className={"link"} href={"mailto:s.marcbenedict@gmail.com"}>
              {" "}
              s.marcbenedict@gmail.com
            </a>
          </p>
        </section>

        <section id={"modify-data"} className={"space-y-5 mb-10"}>
          <p className={"subheading"}>
            13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </p>
          <p>
            Based on the applicable laws of your country, you may have the right
            to request access to the personal information we collect from you,
            details about how we have processed it, correct inaccuracies, or
            delete your personal information. You may also have the right to
            withdraw your consent to our processing of your personal
            information. These rights may be limited in some circumstances by
            applicable law. To request to review, update, or delete your
            personal information, please fill out and submit a
            <a className={"link"} href={"https://forms.gle/EANF2wRBquiTb7bW6"}>
              {" "}
              data subject access request.
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
