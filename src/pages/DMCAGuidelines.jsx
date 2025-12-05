import React from "react";
import { NavLink } from "react-router-dom";

export default function DMCAGuidelines() {
  return (
    <>
      <div className=" flex justify-center  ">
        <div className="max-w-[1400px] mt-4">
          <h3 className=" text-[36px] mt-10 font-[700] ">DMCA Guidelines</h3>

          <p className=" my-4 md:text-[16px] text-[12px] font-[400] ">
            launch.fun respects intellectual property rights and complies with
            the Digital Millennium Copyright Act ("DMCA"). launch.fun does not
            necessarily store or archive all creator data (e.g., any
            livestreamed video data)—when we identify infringing content, we
            respond by immediately removing or disabling access to the content
            identified as infringing (e.g., active livestream broadcasts,
            tokens, and comments).
          </p>

          <p className=" my-4 md:text-[16px] text-[12px] font-[400] ">
            launch.fun does not have the authority or the ability to adjudicate
            allegations of copyright infringement. The DMCA requires launch.fun
            to act as a middleman, processing claims of infringement by
            rightsholders and counter-notifications from creators. Any dispute
            is solely between the rightsholder and the relevant creator(s).
          </p>

          <h3 className="mt-11 md:text-[24px] text-[18px] font-[600] ">
            Reporting Copyright Infringement
          </h3>

          <div className="md:text-[16px] text-[12px] font-[400] py-4 ">
            If you believe content on launch.fun, including a livestream,
            infringes your copyright, please let us know by contacting "launch
            support" and submitting a written notice ("DMCA Notice") containing
            the following:
            <div className="p-5">
              <ul className="mx-4 list-disc mt-3  ">
                <li>
                  <span className=" font-[800] ">
                    {" "}
                    Your contact information:
                  </span>
                  name, physical address, telephone number, and email address.
                </li>

                <li>
                  <span className=" font-[800] ">
                    {" "}
                    Identification of copyrighted work:
                  </span>
                  a clear description or link to the copyrighted content you
                  claim has been infringed.
                </li>

                <li>
                  <span className=" font-[800] ">
                    Identification of infringing content:
                  </span>
                  information reasonably sufficient for our moderators to locate
                  and identify the content (e.g., username, wallet address,
                  token name, URL of livestream).
                </li>

                <li>
                  <span className=" font-[800] ">
                    Statement of good faith belief and accuracy:
                  </span>
                  the following statement with completed information:
                </li>
              </ul>

              <div
                className=" bg-[#1F2937] mt-5 rounded-lg p-4
"
              >
                <p className="md:text-[16px] text-[12px] font-[400] pb-2 ">
                  I,____________, wish to state that:
                </p>
                <p className="md:text-[16px] text-[12px] font-[400] pb-2 ">
                  I have a good faith belief that the use of the material in the
                  manner complained of is not authorized by the copyright owner,
                  its agent, or the law;
                </p>

                <p className="md:text-[16px] text-[12px] font-[400] pb-2 ">
                  This notification is accurate; and
                </p>

                <p className="md:text-[16px] text-[12px] font-[400] pb-1 ">
                  Under penalty of perjury, I am the owner, or an agent
                  authorized to act on behalf of the owner, of an exclusive
                  right that is allegedly infringed.
                </p>
              </div>
            </div>
            <span>
              Where possible and appropriate, launch.fun will notify the
              impacted creator of the claimed infringement.
            </span>
          </div>

          <h3 className="mt-5 md:text-[24px] text-[18px] font-[600] ">
            Response to Valid Notices
          </h3>

          <p className="md:text-[16px] text-[12px] font-[400] pt-4 ">
            When launch.fun receives a valid DMCA Notice, launch.fun will:
          </p>

          <p className="p-8">
            <ul className="mx-4 list-disc  ">
              <li>
                Promptly review the content, including any active livestream;
              </li>

              <li>
                Immediately terminate or disable access to the content insofar
                as launch.fun is able to do so, including terminating an ongoing
                livestream if infringement is confirmed by our moderators; and
              </li>

              <li>
                Notify the content creator responsible for the content about the
                removal.
              </li>
            </ul>
          </p>

          <p className="md:text-[16px] text-[12px] font-[400] ">
            If you (the creator) believe that a notification was sent that was a
            mistake or is based on misidentification, then you may submit a
            counter-notice to legal@launch.fun containing the following:
          </p>

          <p className="p-8">
            <ul className="mx-4 list-disc  ">
              <li>
                <span className="font-[700] ">Your contact information:</span>
                name, physical address, telephone number, and email address.
              </li>

              <li>
                <span className="font">Identification of content:</span>
                information reasonably sufficient for our moderators to locate
                and identify the content (e.g., token name, URL of livestream)
                including the date/time.
              </li>

              <li>
                Identity of the claimant that submitted the infringement notice.
              </li>
              <li>
                Explanation for why you believe there was a mistake or
                misidentification.
              </li>
            </ul>
          </p>

          <p className="md:text-[16px] text-[12px] font-[400] py-4 ">
            Where possible and appropriate, launch.fun will notify the claimant
            of the counter-notice.
          </p>

          <h3 className="mt-5 md:text-[24px] text-[18px] font-[600] ">
            Repeat Infringers
          </h3>

          <p className="md:text-[16px] text-[12px] font-[400] py-4 ">
            launch.fun will terminate a creator's access to the platform if
            launch.fun determines that the creator is a repeat infringer of
            protected works. Receiving three separate "strikes" will constitute
            repeat infringement.
          </p>

          <h3 className="mt-5 md:text-[24px] text-[18px] font-[600] ">
            Policy Updates
          </h3>

          <p className="md:text-[16px] text-[12px] font-[400]  ">
            launch.fun reserves the right to update or revise this policy at any
            time. Continued use of our services constitutes acceptance of any
            revisions.
          </p>

          <h3 className="mt-5 md:text-[24px] text-[18px] font-[600] ">
            Designated Agent
          </h3>

          <p className="md:text-[16px] text-[12px] font-[400] py-4 ">
            If you are a rightsholder (or their legally authorized agent) and
            believe that content on launch.fun infringes your copyright, you may
            submit a DMCA notice pursuant to these guidelines to request that
            launch.fun remove or disable access to that content. The fastest way
            to get a response is to email legal@launch.fun.
          </p>

          <p className="md:text-[16px] text-[12px] font-[400] py-4 ">
            If you prefer to submit your notice physically, you may do so by
            mailing: 82a James Carter Road, Mildenhall, Bury St. Edmunds,
            England, IP28 7DE
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
