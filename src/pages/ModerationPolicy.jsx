import React from "react";
import { NavLink } from "react-router-dom";

export default function ModerationPolicy() {
  return (
    <>
      <div className=" flex justify-center  ">
        <div className="max-w-[1400px] mt-4">
          <h3 className=" text-[36px] mt-10 font-[700] ">
            Livestream Moderation Policy
          </h3>

          <p className=" my-4 md:text-[16px] text-[12px] font-[400] ">
            <span className=" font-[800] ">Purpose:</span>
            To cultivate a social environment on launch fun that preserves
            creativity and freedom of expression and encourages meaningful
            engagement amongst users, free of illegal, harmful, and negative
            interactions. We consider this moderation policy to be a living
            document, and you should check it frequently as it will be updated
            from time to time, including in response to feedback from the
            community, moderators, policy experts, and other stakeholders.
          </p>

          <h3 className="mt-11 md:text-[24px] text-[18px] font-[600] ">
            Restriction on Underage Use
          </h3>

          <p className="md:text-[16px] text-[12px] font-[400] py-4 ">
            Livestreaming—whether streaming yourself, watching a stream, or
            chatting with other viewers—is restricted to users above the age of
            18. launch fun takes this user restriction seriously. If we identify
            a user violating this policy, we will promptly terminate your
            account. We reserve the right to require age verification where we
            deem it necessary, and whether verification is necessary is subject
            to our sole and absolute discretion.
          </p>

          <h3 className="mt-5 md:text-[24px] text-[18px] font-[600] ">
            Appropriateness of Content
          </h3>

          <p className="md:text-[16px] text-[12px] font-[400] py-4 ">
            Aside from the prohibitions listed below, launch fun does not intend
            to universally define what content is 'appropriate' or
            'inappropriate.' There is an implicit assumption that some content -
            perhaps much content - generally defined as NSFW will in fact appear
            on launch fun. The livestreaming platform is intended exclusively
            for users above the age of 18.
            <p className=" pt-5">
              launch fun reserves the right to unilaterally determine the
              appropriateness of content where necessary and to moderate it
              accordingly.
            </p>
          </p>

          <h3 className="mt-5 md:text-[24px] text-[18px] font-[600] ">
            Prohibited Content
          </h3>

          <p className="md:text-[16px] text-[12px] font-[400] py-4 ">
            Streams containing any of the following are prohibited and subject
            to immediate termination and suspension of future access to launch
            fun livestreams or to launch fun itself:
            <p className="p-5">
              <span className=" font-[800] "> Violence:</span> Graphic violence,
              threats, glorification of violent acts, or content promoting
              self-harm. launch fun takes violence seriously, and it is
              considered a zero-tolerance violation. Accounts associated with
              such activities should expect to be indefinitely suspended.
              Specific examples include:
              <ul className="mx-4 list-disc mt-3 list-inside ">
                <li>
                  Attempts or threats to physically harm or kill yourself or
                  others
                </li>
                <li>Attempts or threats to hack, dox, DDOS, or SWAT others</li>
                <li>
                  Use of weapons to physically threaten, intimidate, harm, or
                  kill
                </li>
                <li>
                  Encouraging others to participate in acts that may harm others
                </li>

                <li>Promotion of sexual violence</li>
              </ul>
            </p>
            <p className="p-5">
              <span className=" font-[800] "> Harassment:</span>
              People experience harassment in different ways, including targeted
              abuse, bullying, sexual harassment, or coordinated harassment
              campaigns. Specific examples include:
              <ul className="mx-4 list-disc mt-3 list-inside ">
                <li>Encouraging harm or death to someone else</li>
                <li>Implied threats of violence</li>
                <li>
                  Sharing negative doctored or "deep fake" content to
                  intentionally abuse or degrade another person
                </li>
                <li>Stalking</li>

                <li>Unwanted sexual advances</li>
                <li>
                  Advocating or encouraging sexual violence against someone else
                </li>
              </ul>
            </p>
            <p className="p-5">
              <span className=" font-[800] ">Sexual Content:</span>
              Sexual Content: Sexual and pornographic content as well as nudity
              without context. Even where consensual, this content is frequently
              subject to other rules and regulations that make it unsupportable.
              Specific examples include:
              <ul className="mx-4 list-disc mt-3 list-inside ">
                <li>
                  Explicit, simulated, fictional, or implied sex or masturbation
                </li>
                <li>
                  Advertisement or solicitation of sex, including prostitution,
                  escorts, and filmed sexual activity
                </li>
                <li>Consensual sexual activities</li>
                <li>
                  Non-consensual sexual activities and sexual exploitation
                </li>

                <li>
                  Encouraging or directing viewers to engage in sexual acts
                </li>
              </ul>
            </p>
            <p className="p-5">
              <span className=" font-[800] ">Youth Endangerment:</span>
              Livestreaming may not be targeted to people under the age of 18
              and may not contain any content that features or promotes
              activities that endanger youth. We report all illegal content or
              activity to the National Center for Missing and Exploited
              Children, which works with global law enforcement agencies. The
              consequence for engaging in youth endangerment activity is
              immediate and indefinite suspension as well as reporting to law
              enforcement. Specific examples include:
              <ul className="mx-4 list-disc mt-3 list-inside ">
                <li>
                  Content promoting or constituting child sexual abuse material
                  ("CSAM") (e.g., sexually explicit content or sexualized images
                  of youth including AI generated images)
                </li>
                <li>
                  Content that promotes or depicts the sexual exploitation or
                  grooming of children
                </li>
                <li>
                  Sharing information about or links to third-party sites that
                  contain CSAM
                </li>
                <li>Identifying CSAM victims (e.g., name or image)</li>

                <li>
                  Grooming or otherwise purposefully exposing youth to sexually
                  explicit language or material, as well as engaging in sexual
                  conversations in chat with youth
                </li>
              </ul>
            </p>
            <p className="p-5">
              <span className=" font-[800] ">Illegal Activities:</span>
              Content promoting illicit behavior or violations of the law in
              launch fun's jurisdictions and your own. Any content or activity
              featuring, encouraging, or soliciting illegal activity may be
              reported to law enforcement. Specific examples include:
              <ul className="mx-4 list-disc mt-3 list-inside ">
                <li>
                  Engaging in or encouraging human trafficking (e.g., sex
                  trafficking, sales of children)
                </li>
                <li>
                  Buying or selling illegal firearms, drugs, or counterfeit
                  goods
                </li>
                <li>Defamation</li>

                <li>
                  Destroying or stealing someone else's property or public
                  property
                </li>
              </ul>
            </p>
            <p className="p-5">
              <span className=" font-[800] ">Privacy Violations: </span>
              Sharing personal information without consent, doxxing (i.e. the
              unauthorized association of a person's identity with their online
              handle or persona), or unauthorized broadcasting of private
              individuals' likenesses. Specific examples include:
              <ul className=" list-disc mx-4 mt-3 list-inside ">
                <li>AI generated images and deep fakes</li>
                <li>Promoting or encouraging impersonation of others</li>

                <li>
                  Disclosure of personal information of non-public figures
                  without their consent
                </li>
                <li>
                  Disclosure of personal information of public figures for the
                  purposes of prohibited harassment or illegal activity
                </li>
              </ul>
            </p>
            <p className="p-5">
              <span className=" font-[800] ">Copyright Violations: </span>
              Unauthorized broadcasting of protected content, trademarked
              content, or the use of intellectual property belonging to another
              person without permission. You may not use or share content that
              you do not own or have the right to share. Specific examples
              include:
              <ul className=" list-disc mx-4 my-3 list-inside ">
                <li>Use of copyrighted songs</li>
                <li>Content created by others on different platforms</li>

                <li>
                  Pirated content, including games, movies, television shows, or
                  sporting events
                </li>
                <li>Trademarked good or services</li>
              </ul>
              <p>
                Launch fun's DMCA guidelines are available here, which include
                information on submitting a copyright infringement notification.{" "}
              </p>
            </p>
            <p className="p-5">
              <span className=" font-[800] ">
                Terrorism or Violent Extremism:{" "}
              </span>
              Glorification of or encouragement of acts which would cause harm
              to others or significant harm to property. Any content or activity
              supporting or promoting terrorism or violent extremism may be
              reported to law enforcement. Specific examples include:
              <ul className=" list-disc mx-4 my-3 list-inside ">
                <li>Use of copyrighted songs</li>
                <li>Display or linking to terrorist propaganda</li>

                <li>
                  Graphic footage or images of terrorist violence for the
                  purpose of encouraging, supporting, or glorifying the conduct
                </li>
              </ul>
            </p>
          </p>

          <h3 className="mt-5 md:text-[24px] text-[18px] font-[600] ">
            Enforcement
          </h3>

          <p className="md:text-[16px] text-[12px] font-[400] py-4 ">
            Violation of this policy may result in termination of livestreams
            and user account(s). This policy is enforced at the sole discretion
            of launch fun. While our moderators work diligently to ensure that
            this policy is not violated, we may not discover every violation of
            this policy. The publication of material which violates this policy
            and is not discovered by our moderators does not constitute a waiver
            of our right to enforce this policy, in its entirety, to any
            subsequently posted content.
          </p>

          <p className="md:text-[16px] text-[12px] font-[400] ">
            If you believe that any content violates our guidelines or your
            rights, please let us know by contacting legal@launch.fun. Clearly
            identify the content in question and explain the concern. Our
            moderation team will promptly review your request and make a
            determination.
          </p>

          <p className="md:text-[16px] text-[12px] font-[400] py-4 ">
            Content determined to violate these rules will be removed. launch
            fun reserves the right to ban any user violating these rules and to
            make appropriate referrals to law enforcement if any posted content
            violates the law.
          </p>

          <h3 className="mt-5 md:text-[24px] text-[18px] font-[600] ">
            Creator Responsibilities
          </h3>

          <p className="md:text-[16px] text-[12px] font-[400] py-4 ">
            <ul className=" list-disc mx-4 mb-3 list-inside ">
              <li>Follow the moderation policy</li>
              <li>
                Review moderation guidelines before streaming sensitive topics
              </li>
            </ul>
          </p>

          <h3 className="mt-5 md:text-[24px] text-[18px] font-[600] ">
            Appeals Process
          </h3>

          <p className="md:text-[16px] text-[12px] font-[400] py-4 ">
            We acknowledge that mistakes may be made in enforcing this policy
            and, to the extent a user believes that their content has been
            mistakenly removed and does not violate this policy and/or the
            user's account was banned as a result of the violation, such user
            may appeal.
          </p>

          <p className="md:text-[16px] text-[12px] font-[400]  ">
            Contact legal@launch.fun clearly stating your reasons for appealing
            our decision. Include relevant details to help us reconsider the
            matter. Our moderation team will promptly re-evaluate your content
            based on your appeal. We'll provide you with a final decision and
            explanation by email.
          </p>

          <p className="md:text-[16px] text-[12px] font-[400] py-4 ">
            launch fun retains the ultimate discretion to determine whether
            content violates this policy.
          </p>
        </div>
      </div>
       <div className="mt-4 bg-black flex ">
        <div className="flex-1 text-[#9CA3AF] text-[14px] hover:underline">
          © pump.fun 2025
        </div>

        <div className="flex-1 hover:text-[#fff] text-[#9CA3AF] text-[14px] hover:no-underline ">
          <NavLink className="underline   ">Privacy policy</NavLink>
          <NavLink>Terms of service</NavLink>
          <NavLink>Fees</NavLink>

          <NavLink>Revenue</NavLink>

          <NavLink>Tech updates</NavLink>
        </div>
      </div>
    </>
  );
}
