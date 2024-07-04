import React from 'react'
import Image from 'next/image';
import dlogo from "../public/drivus-03.png";

function Terms() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-2 mt-5'>
          <Image src={dlogo} height={80} width={190} alt="Aggrement" />
        </div>
      </div>
      <h4 className='text-center fw-bold mt-3' style={{ color: "#7030A0" }}>Rental Terms and Conditions</h4>

      <table className="text-dark fs-6">
        <thead>
          <tr style={{ borderBottom: "2px solid black" }}>
            <th scope="col">1</th>
            <th scope="col">Introduction</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <th scope="row">1.1</th>
            <td>This contract to hire a Vehicle from Drivus (Rental Contract) consists of:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>the agreement (Rental Agreement) You have signed to hire the Vehicle from Us; and</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>these rental Terms and Conditions (Terms and Conditions).</td>
          </tr>

          <tr>
            <th scope="row">1.2</th>
            <td>We may, at any time, and at our sole discretion, modify these Terms and Conditions of Use, including our Privacy Policy, with or without notice to the User. Any such modification will be effective immediately upon public posting or if applicable immediately after notifying you via the communication channels that you listed as your contact details in the schedule (either email / SMS / messenger). Your continued use of our Service and this Site following any such modification constitutes your acceptance of these modified Terms.</td>
          </tr>

          <tr>
            <th scope="row">1.3</th>
            <td>The date of the Rental Contract is the date shown in the Rental Agreement.</td>
          </tr>

          <tr>
            <th scope="row">1.4</th>
            <td>The Rental Contract is governed by the laws of New South Wales and You agree that courts in that state have non-exclusive jurisdiction to determine any dispute that arises between You and Us.</td>
          </tr>

          <tr>
            <th scope="row">1.5</th>
            <td>A GPS Tracking Device is fitted to the Vehicle to enable Us to track the Vehicle when it is out of Our possession.  When You sign the Rental Agreement You are authorising Us to use the GPS Tracking Device to track the Vehicle until it is returned to Us.</td>
          </tr>

          <tr>
            <th scope="row">1.6</th>
            <td>The Australian Consumer Law applies to the Rental Contract and it provides You with rights that are not excluded, restricted or modified by the Rental Contract and any provision in this contract is subject to the specific protections and guarantees in that and any corresponding Federal, State or Territory legislation.</td>
          </tr>

        </tbody>

        <thead>

          <tr style={{ borderBottom: "2px solid black" }}>
            <th className='pt-2' scope="col">2</th>
            <th scope="col">Who may drive the Vehicle?</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <th scope="row">2.1</th>
            <td>Only You or an Authorised Driver can drive the Vehicle.  It is a Major Breach of the Rental Contract if You let anyone who is unauthorised drive the Vehicle.  If there is a Major Breach of the Rental Contract there is no Damage Cover for You, the Authorised Driver or the unauthorised driver for any Damage, theft of the Vehicle or Third Party Loss.</td>
          </tr>

          <tr>
            <th scope="row">2.2</th>
            <td>We set a minimum and maximum age limit for those renting Our Vehicles.  You and any Authorised Driver must be at least 21 and not over 75 years of age and have no less than 12 months driving experience, unless We have agreed to a variation of that restriction before the Start of the Rental and it is shown in the Rental Agreement.</td>
          </tr>

          <tr>
            <th scope="row">2.3</th>
            <td>You and any Authorised Driver must also have a valid licence to drive the class of Vehicle which is:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>issued in an Australian state or territory or an international licence (with an valid International Driving Permit o approved translation into English if Your licence is not issued in English);</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>appropriate for the class of the Vehicle; and5</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(c)</span>not subject to any restriction or condition.</td>
          </tr>

          <tr>
            <th scope="row">2.4</th>
            <td>Learner drivers and provisional and probationary licence holders are not acceptable and must not drive the Vehicle.</td>
          </tr>

          <tr>
            <th scope="row">2.5</th>
            <td>The Vehicle must not be driven if Your licence or the licence of any Authorised Driver has been cancelled within 2 years of the date of the Rental Agreement.</td>
          </tr>

        </tbody>

        <thead>

          <tr style={{ borderBottom: "2px solid black" }}>
            <th className='pt-2' scope="col">3</th>
            <th scope="col">Prohibited Use</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <th scope="row">3.1</th>
            <td>The Vehicle must not be driven by You or any Authorised Driver:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>whilst intoxicated or under the influence of drugs or alcohol or with a blood alcohol content or level of drugs present in blood, urine or oral fluid that exceeds the limit set by law;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>recklessly or dangerously; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>whilst the Vehicle is damaged or unsafe.</td>
          </tr>

          <tr>
            <th scope='row'>3.2</th>
            <td>You and any Authorised Driver <b>must not:</b></td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>fail or refuse to undergo any breath, blood, urine or oral fluid test or drug impairment assessment;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>use the Vehicle:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(i)</span>for any illegal purpose;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(ii)</span>to move dangerous, hazardous, inflammable goods or substances that pollute or contaminate, in quantities above that used for domestic purposes;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(iii)</span>to propel or tow another vehicle or a trailer;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(iv)</span>to carry illegal drugs or substances;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(v)</span>in connection with the motor trade for experiments, tests, trials or demonstration purposes; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(vi)</span>in an unsafe or un-roadworthy condition.</td>
          </tr>

          <tr>
            <th scope='row'>3.3</th>
            <td>You and any Authorised Driver <b>must not:</b></td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>damage the Vehicle deliberately or recklessly or allow anyone else to do so;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>modify the Vehicle in any way;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(c)</span>sell, rent, lease or dispose of the Vehicle; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(d)</span>register or claim to be entitled to register any interest in the Vehicle under the Personal Property Securities Act 2009.</td>
          </tr>

          <tr>
            <th scope='row'>3.4</th>
            <td>You and any Authorised Driver <b>must not</b>use the Vehicle to carry:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>passengers for hire, fare or reward or for rideshare purposes; </td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>more than the number of passengers for which the Vehicle is licensed; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(c)</span>any load that exceeds the limits for which the Vehicle was designed, constructed, registered or licenced.</td>
          </tr>

          <tr>
            <th scope='row'>3.5</th>
            <td>You and any Authorised Driver <b>must not:</b></td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>use the Vehicle to transport any pets or animals except assistance animals; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>smoke in the Vehicle and You must prevent any passenger from doing so.</td>
          </tr>

          <tr>
            <td colSpan='2'>Additional cleaning and deodorising costs must be paid if there is a breach of this clause.</td>
            <td></td>
          </tr>

          <tr>
            <th scope='row'>3.6</th>
            <td>You and any Authorised Driver <b>must not</b> use a mobile phone or a GPS unit whilst the Vehicle is in motion or stationary; but not parked unless the body of the phone or GPS unit is affixed to the Vehicle and the phone or GPS unit is not being held or touched at any time whilst being used.</td>
          </tr>

        </tbody>

        <thead>

          <tr style={{ borderBottom: "2px solid black" }}>
            <th className='pt-2' scope="col">4</th>
            <th scope="col">Prohibited areas of use</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <th scope='row'>4.1</th>
            <td>The Vehicle must never<b> must never</b> be driven on:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>an Unsealed Road;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>Off Road; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>above the snow line between 1 May and 31 October or in any area where snow has fallen or is likely to fall.</td>
          </tr>

          <tr>
            <th scope='row'>4.2</th>
            <td>The Vehicle <b>must not</b> be used in any area that is prohibited by Us.Prohibited areas include:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>roads that are prone to flooding or are flooded;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>beaches, streams, rivers, creeks, dams and floodwaters;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(c)</span>any road where the police or an authority has issued a warning;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(d)</span>any road that is closed; and</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(e)</span>any road where it would be unsafe to drive the Vehicle.</td>
          </tr>

          <tr>
            <th scope='row'>4.3</th>
            <td>The Vehicle must never be driven onto any island that is off mainland Australia, except:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>Stradbroke Island;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>Magnetic Island;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(c)</span>Bribie Island;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(c)</span>Philip Island; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(e)</span>Bruny Island</td>
          </tr>

          <tr>
            <td className='fw-bold' colSpan='2'>unless We have given Our prior written permission prior to the Start of the Rental and it is noted on the Rental Agreement.</td>
            <td></td>
          </tr>

        </tbody>

        <thead>

          <tr style={{ borderBottom: "2px solid black" }}>
            <th className='pt-2' scope="col">5</th>
            <th scope="col">Your obligations</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <th scope='row'>5.1</th>
            <td>At the Start of the Rental and before collecting the Vehicle You must pay 14 days' Rental Charges in advance and the Bond of $1,000.  Subsequent Rental Charges are payable in advance and paid by direct debit pursuant to the authority You have signed with Pay Advantage.</td>
          </tr>

          <tr>
            <th>5.2</th>
            <td>The Bond is fully refundable to You provided that all below conditions are met:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>all amounts due to Us under the Rental Contract have been paid, including toll road charges, fines and associated nomination fees, any applicable towing, repossession, cleaning and restoration costs, and refuelling costs;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>the Vehicle has been returned to the Rental Location at the date and time set in the Rental Agreement;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(c)</span>there is no Damage or Third Party Loss;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(d)</span>the exterior and interior of the Vehicle are clean;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(e)</span>the Vehicle has a full tank of fuel; and</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(f)</span>there has not been a Major Breach of the Rental Contract (This includes falling behind for 2 weeks of rent);</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(g)</span>	either full term of the lease of this contract is completed or if Drivus fails to provide the contracted service.</td>
          </tr>

          <tr>
            <th>5.3</th>
            <td>At the Start of the Rental You must also inspect the Vehicle to make sure that any pre-existing damage is noted and shown in the Rental Agreement.</td>
          </tr>

          <tr>
            <th>5.4</th>
            <td>You and any Authorised Driver must pay all tolls, speeding and traffic fines and infringements as well as any fines or charges imposed for parking or using the Vehicle or release of the Vehicle if it has been seized by a regulatory authority. An administrative fee of $40 applies if We are required to nominate You or an Authorised driver as the responsible party.</td>
          </tr>

          <tr>
            <th>5.5</th>
            <td>You <b>must</b> comply with all mandatory:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>seat belt laws and fines may be imposed by the police on any driver or passenger who does not have a seat belt properly adjusted and fastened; and</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>child restraint laws and ensure that for all children under the age of seven years the restraint has been fitted correctly according to the weight and age of the child and that the restraint is properly adjusted and fastened.</td>
          </tr>

          <tr>
            <th>5.6</th>
            <td>You and any Authorised Driver <b>must</b> make sure that the Vehicle is locked when not in use or unattended and the keys or remote control device <b>must</b> be kept in Your possession, or that of any Authorised Driver, at all times and are never left in the ignition when the Vehicle is unattended.</td>
          </tr>

          <tr>
            <th>5.7</th>
            <td>You and any Authorised Driver <b>must</b> take reasonable care of the Vehicle by:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>preventing it from being damaged;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>making sure that it is protected from the weather;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(c)</span>using the correct fuel type; and</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(d)</span>making sure it is not overloaded.</td>
          </tr>

          <tr>
            <th>5.8</th>
            <td>You <b>must</b> inform Us immediately if:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>a warning light or fault message appears;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>You see or become aware of low engine or brake oils, or engine coolant levels; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(c)</span>the Vehicle develops any fault during the Rental Period.</td>
          </tr>

          <tr>
            <td colSpan='2'>If You fail to notify Us and continue to use the Vehicle You will be responsible for any Damage or Third Party Loss.</td>
            <td></td>
          </tr>

          <tr>
            <th>5.9</th>
            <td>You <b>must</b> not let anyone else repair or work on the Vehicle or tow or salvage it without Our prior written authority to do so.</td>
          </tr>

          <tr>
            <th>5.10</th>
            <td>Where We have given You Our prior authority to repair the Vehicle You <b>must</b> keep and produce to Us the original tax invoices and receipts for any repairs, towing or salvage and You will be reimbursed only if these expenses have been authorised by Us. Any entitlement to reimbursement is subject to there being no Major Breach of the Rental Contract.</td>
          </tr>

          <tr>
            <th>5.11</th>
            <td>You <b>must not</b> leave the Vehicle unattended following an Accident and before the arrival of a tow or salvage operator.</td>
          </tr>

        </tbody>

        <thead>

          <tr style={{ borderBottom: "2px solid black" }}>
            <th className='pt-2' scope="col">6</th>
            <th scope="col">Maintenance</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <th>6.1</th>
            <td>You <b>must</b> maintain the engine and brake oils and coolant level and tyre pressures and check these on a weekly basis.</td>
          </tr>

          <tr>
            <th>6.2</th>
            <td>Regular servicing of the Vehicle is critical to ensuring it is properly maintained and of an acceptable quality.  At intervals not exceeding 6 months or 10,000 kilometres, whichever first occurs, You <b>must:</b></td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>contact Us to arrange for the Vehicle to be serviced on a mutually agreed date and time; and</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>take the Vehicle to Our service centre, OMG Direct Smash Repair at 2 Rosedale Avenue, Greenacre, NSW on the agreed date and at the agreed time.</td>
          </tr>

          <tr>
            <th>6.3</th>
            <td>We will pay the cost of the service, parts, tyres and other issues with the Vehicle providing these were not caused by You or any Authorised Driver.</td>
          </tr>

        </tbody>

        <thead>

          <tr style={{ borderBottom: "2px solid black" }}>
            <th className='pt-2' scope="col">7</th>
            <th scope="col">Toll charges</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <th>7.1</th>
            <td>An electronic tag <b>(e-tag)</b> is not fitted to the Vehicle. It is Your responsibility to fit an e-tag to the Vehicle when using your allocated hired Vehicle on toll roads if you wish to manage your own tolls using your independent toll service provider.Otherwise, by default all Drivus cars are taglessly managed by MFA toll account. You are therefore required to complete and accept the Terms & Conditions of Service, as attached for your Toll Trips managed by eFleetPass. Completing Attached Mandatory Tolling Terms and Conditions is a condition of hire to the vehicle being driven during the time of usage.</td>
          </tr>

          <tr>
            <th>7.2</th>
            <td>If You fail to pay the Tolls issued to you, we are required to nominate you as the responsible party. We will charge You an administrative fee of <b>$10</b> for each nomination. Always have an active balance for the payment of Tolls Charged to your account by eFleetPass Tolling to avoid further charges and default of payment.</td>
          </tr>

          <tr>
            <th>7.3</th>
            <td>If the total amount of unpaid dues in your MFA toll account arising from Tolls and Nomination fee exceeds $350 then Drivus shall have the option to terminate this Agreement and repossess the Vehicle at any time from any location.</td>
          </tr>

        </tbody>

        <thead>

          <tr style={{ borderBottom: "2px solid black" }}>
            <th className='pt-2' scope="col">8</th>
            <th scope="col">Damage Cover</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <th>8.1</th>
            <td>Standard Damage Cover is included in the Rental Charges.  Subject to these Terms and Conditions, if You or any Authorised Driver has an Accident or if the Vehicle is stolen We will indemnify You and any Authorised Driver for the theft, any Damage or Third Party Loss but You must pay up to the Damage Excess shown on the Rental Agreement for each Accident or theft unless:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>We agree You were not at fault; and</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>if the Vehicle has been stolen, after We have made reasonable enquiries and in Our opinion it is unlikely the Vehicle will be recovered; and</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(c)</span>for Accidents in which there is also Third Party Loss, after:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(i)</span>a reasonable estimate of the Third Party Loss has been made;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(ii)</span>a repairer's estimate or tax invoice verifying the amount charged for Damage has been obtained; and </td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(iii)</span>all documents verifying the Third Party Loss and Damage have been sent to You,</td>
          </tr>

          <tr>
            <td colSpan='2' className='fw-bold'>unless You have expressly authorised the charge to Your credit card at an earlier time.</td>
            <td></td>
          </tr>

        </tbody>

        <thead>

          <tr style={{ borderBottom: "2px solid black" }}>
            <th className='pt-2' scope="col">9</th>
            <th scope="col">Damage Cover Exclusions</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <th>9.1</th>
            <td>There is no Damage Cover, and You and any Authorised Driver are liable for:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>Damage or Third Party Loss arising from:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(i)</span>a Major Breach of the Rental Contract; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(ii)</span>the use of the Vehicle by any driver who is not an Authorised Driver or who is less than 21 or more than 75 years of age;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>Overhead Damage;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(c)</span>Underbody Damage; and</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(d)</span>Damage caused by immersion of the Vehicle in water.</td>
          </tr>

          <tr>
            <th>9.2</th>
            <td>There is also no Damage Cover for:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>the full cost of replacing or repairing any accessories supplied by Us including, but not limited to GPS units, lost keys, keyless start and remote control devices; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>personal items that are left in or stolen from the Vehicle or for loss or damage to property belonging to or in the custody of:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(i)</span>You;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(ii)</span>any relative, friend or associate of Yours ordinarily residing with You or with whom You ordinarily reside; </td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(iii)</span>any relative, friend or associate of an Authorised Driver; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(iv)</span>Your employees.</td>
          </tr>

        </tbody>

        <thead>

          <tr style={{ borderBottom: "2px solid black" }}>
            <th className='pt-2' scope="col">10</th>
            <th scope="col">Rental Period, costs and charges</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <th>10.1</th>
            <td>The Rental Agreement shows:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>the Rental Period for which You have hired the Vehicle; and</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>the Rental Charges.You must return the Vehicle on the date and by the time shown in the Rental Agreement. If You fail to return the Vehicle, We may terminate the Rental Contract and if the location of </td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(c)</span>the Vehicle is known, recover it by lawful means or if it is unknown, after making reasonable attempts to contact You, report the Vehicle as stolen to the Police.</td>
          </tr>

          <tr>
            <th>10.2</th>
            <td>If the Vehicle is returned to Us early there is no entitlement to a refund.</td>
          </tr>

          <tr>
            <th>10.3</th>
            <td>If You return the Vehicle: </td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>more than one hour after the date and time set for its return in the Rental Agreement, We will charge You $25 per hour up to one full day's rental and a further full day's rental at the standard rate for each 24 hour period or part thereof until the Vehicle is returned to Us; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>at any time outside Our normal business hours You must pay for the daily Rental Charges and all Damage until the Rental Location next opens for business unless We have agreed to an after business hours drop off and it is shown on the Rental Agreement.</td>
          </tr>

          <tr>
            <th>10.4</th>
            <td>If You return the Vehicle with less than a full tank of fuel a refuelling charge of $55 (including GST) plus the cost of the fuel, will apply.</td>
          </tr>

          <tr>
            <th>10.5</th>
            <td>At the End of the Rental You <b>must:</b></td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>return the Vehicle:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(i)</span>cleaned and washed and in the same condition it was in at the Start of the Rental, fair wear and tear excepted; and</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(ii)</span>with a full tank of fuel;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>pay:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(i)</span>the balance of the Rental Charges (if any);</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(ii)</span>the Damage Excess if there is Damage or Third Party Loss as a result of an Accident or the Vehicle is stolen;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(iii)</span>any costs We incur, including extra cleaning costs under clause 3.5, in reinstating the Vehicle to the same condition it was in at the Start of the Rental, fair wear and tear excluded;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(iv)</span>for all Damage arising from a Major Breach of the Rental Contract;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(v)</span>for all Overhead Damage; </td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(vi)</span>for all Underbody Damage; and</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(vii)</span>for any Damage caused by the immersion of the Vehicle in water.</td>
          </tr>

          <tr>
            <th>10.6</th>
            <td>A cleaning fee of $250 applies if the Vehicle is not cleaned and washed when returned at the End of Rental.</td>
          </tr>

          <tr>
            <th>10.7</th>
            <td>Any amount payable under the Rental Contract is subject to subsequent verification and adjustment and details of any adjustments will be provided to You as soon as practicable.  Amounts owing to Us after the End of the Rental pursuant to clause 10.6 accrue interest at the rate of 10% per annum commencing 14 days after the End of the Rental .</td>
          </tr>

          <tr>
            <th>10.8</th>
            <td>Credit card authority</td>
          </tr>

          <tr>
            <td colSpan='2'>If any amount is due to Us, including the Damage Excess payable under clauses 8.1 and 8.2, or remains unpaid You authorise Us to debit Your credit card with that amount within a reasonable time after the End of the Rental.</td>
            <td></td>
          </tr>

          <tr>
            <th>10.10</th>
            <td>Cancellation</td>
          </tr>

          <tr>
            <td colSpan='2'>If:</td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>Your booking is cancelled within 24 hours prior to the Start of the Rental; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>You fail to notify Us of Your intended cancellation prior to the Start of the Rental and fail to pick up the Vehicle,</td>
          </tr>

          <tr>
            <td colSpan='2'>You will be charged the Rental Charges for the Rental Period as booked unless We are able to rent the Vehicle to another renter for an equivalent term and rate.</td>
            <td></td>
          </tr>

        </tbody>

        <thead>

          <tr style={{ borderBottom: "2px solid black" }}>
            <th className='pt-2' scope="col">11</th>
            <th scope="col">Accidents or breakdowns</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <th>11.1</th>
            <td>If the Vehicle breaks down during the Rental Period You <b>must</b> contact Us on <b>0410 567 867</b> to arrange assistance.  We will recover and repair the Vehicle as soon as possible but if it cannot be repaired We will use Our best endeavours to provide a replacement Vehicle where one is available.</td>
          </tr>

          <tr>
            <th>11.2</th>
            <td>Subject to the Australian Consumer Law, We are not responsible for:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>flights You have missed;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>holiday plans that are disrupted;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(c)</span>loss of enjoyment; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(d)</span>consequential or economic loss.</td>
          </tr>

          <tr>
            <th>11.3</th>
            <td>We are also not responsible for::</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>Damage as a result of use of the incorrect fuel type;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>a flat battery because the lights or entertainment system have been left on;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(c)</span>tyre changing;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(d)</span>lost keys or remote control device; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(e)</span>keys or remote control device locked in the Vehicle.</td>
          </tr>

          <tr>
            <td colSpan='2'>Extra charges will apply if any of these services are provided at Your request.</td>
            <td></td>
          </tr>

          <tr>
            <th>11.4</th>
            <td>Accident reporting</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>If You or an Authorised Driver has an Accident or if the Vehicle is stolen You must report the Accident or theft to Us within 24 hours of it occurring and fully complete an Accident/Theft report form.</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>If the Vehicle is stolen or if You or an Authorised Driver of the Vehicle has an Accident where:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(i)</span>any person is injured;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(ii)</span>the other party has failed to stop or leaves the scene of the Accident without exchanging names and addresses; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(iii)</span>the other party appears to be under the influence of drugs or alcohol,</td>
          </tr>

          <tr>
            <td></td>
            <td>You or the Authorised Driver must also report the theft or Accident to the Police.</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(c)</span>If You or an Authorised Driver has an Accident You and the Authorised Driver must:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(i)</span>exchange names and addresses and telephone numbers with the other driver;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(ii)</span>take the registration numbers of all vehicles involved;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(iii)</span>take as many photos as is reasonable showing:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(A)</span>the position of the Vehicles before they are moved for towing or salvage;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(B)</span>the Damage to the Vehicle;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(C)</span>the damage to any third party vehicle or property; and</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(D)</span>the general area where the Accident occurred, including any road or traffic signs;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(iv)</span>obtain the names, addresses and phone numbers of all witnesses;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(v)</span>not make any admission of fault or promised to pay the other party's claim or release the other party from any liability;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(vi)</span>forward all third party correspondence or court documents to Us within 7 days of receipt; and</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(vii)</span>co-operate with Us in the prosecution of any legal proceedings that We may institute or defence of any legal proceedings which may be instituted against You or Us as a result of an Accident, including attending Our lawyer's office or any Court hearing.</td>
          </tr>

        </tbody>

        <thead>

          <tr style={{ borderBottom: "2px solid black" }}>
            <th className='pt-2' scope="col">12</th>
            <th scope="col">Consequences of a Major Breach of the Rental Contract</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <th>12.1</th>
            <td>If You or any Authorised Driver:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>commit a Major Breach of the Rental Contract in a way that causes Damage, theft of the Vehicle or Third Party Loss; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>drive the Vehicle in a reckless manner so that a substantial breach of road safety legislation, has occurred,</td>
          </tr>

          <tr>
            <td></td>
            <td>You and any Authorised Driver:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(i)</span>have no Damage Cover; </td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(i)</span>are liable for all Damage, theft of the Vehicle and Third Party Loss; and </td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(iii)</span>are liable for and <b>must</b> pay any additional costs or expenses We incur as a direct consequence.</td>
          </tr>

          <tr>
            <th>12.2</th>
            <td>Acting reasonably, We may terminate the Rental Contract and take immediate possession of the Vehicle if a breach of any part of clause 12.1 has occurred.</td>
          </tr>

        </tbody>

        <thead>

          <tr style={{ borderBottom: "2px solid black" }}>
            <th className='pt-2' scope="col">13</th>
            <th scope="col">Privacy</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td></td>
            <td>We are committed to respecting privacy and will not collect, use or disclose Your personal information where doing so would be contrary to law.</td>
          </tr>

        </tbody>

        <thead>

          <tr style={{ borderBottom: "2px solid black" }}>
            <th className='pt-2' scope="col">14</th>
            <th scope="col">Repossession & Returns</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td></td>
            <td><span className='me-3'>(a)</span>You agree to return the <b>Vehicle</b> to Drivus at the specified time and location as shown on the Rental Agreement, or sooner if demanded by Drivus on reasonable grounds, including where Drivus reasonably believes You have breached, or are likely to breach, the Agreement.</td>
          </tr>

          <tr>
            <td></td>
            <td><span className='me-3'>(b)</span>The <b>Vehicle</b> is not taken to have been returned until the end of the <b>Rental Period</b>. If You return the <b>Vehicle</b> outside <b>Business Hours</b>, You remain responsible for the <b>Vehicle</b> until Drivus has inspected and accepted the return of it the next <b>Business Day</b>.</td>
          </tr>

          <tr>
            <td></td>
            <td><span className='me-3'>(c)</span>If You do not return the <b>Vehicle</b> when required by this Agreement, then after Drivus sends to You a <b>written demand</b> (written in the form of SMS or Email or Facebook Messenger or Whatsapp Messenger or Physical Letter or any form of reliable communication) to You to return it, Drivus will take steps to recover and repossess the <b>Vehicle</b> where and when it is found. You by this agreement authorise Drivus to enter any premises owned or occupied by You, or where necessary, You also agree to make all reasonable efforts to obtain the right for Drivus to enter any premises in order to recover and repossess the Vehicle.</td>
          </tr>

          <tr>
            <td></td>
            <td><span className='me-3'>(d)</span>If the <b>Vehicle</b> is found illegally parked, apparently abandoned or is used or obtained as prohibited under this Agreement, Drivus may recover the Vehicle without sending a written demand under clause 14(c) . To the extent permitted by law, You waive any right to any hearing or to receive any notice or legal process as a precondition of Drivus recovering the <b>Vehicle</b> in accordance with this clause 14(d)</td>
          </tr>

          <tr>
            <td></td>
            <td><span className='me-3'>(e)</span>From the date that Drivus sends You a demand pursuant to clause 14(c), Drivus may exercise its legal rights to recover and repossess the <b>Vehicle</b>. You agree to cooperate with Drivus to recover the <b>Vehicle</b>.</td>
          </tr>

          <tr>
            <td></td>
            <td><span className='me-3'>(f)</span>You must reimburse Drivus for its reasonable costs of recovering or repossessing the <b>Vehicle</b> where such costs are a consequence of Your failure to return the <b>Vehicle</b> when required by this Agreement.</td>
          </tr>

          <tr>
            <td></td>
            <td><span className='me-3'>(g)</span>Except to the extent that Drivus is at fault, You indemnify Drivus against any claim made by any third party resulting from Drivus's recovery or repossession of the <b>Vehicle</b>.</td>
          </tr>

        </tbody>

        <thead>

          <tr style={{ borderBottom: "2px solid black" }}>
            <th className='pt-2' scope="col">15</th>
            <th scope="col">{`Drivus’`} early right of Termination</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <th>15.1</th>
            <td>Drivus shall have the option to terminate this Agreement and repossess the Vehicle if at any time without notice from any location if any of the below occurs:</td>
          </tr>

          <tr>
            <td></td>
            <td><span className='me-3'>(a)</span>The Weekly Lease Payments are more than two (2) weeks past the due date for payment, or,</td>
          </tr>

          <tr>
            <td></td>
            <td><span className='me-3'>(b)</span>If the total amount of unpaid dues in your MFA toll account arising from Tolls and Nomination fee exceeds $350.</td>
          </tr>

          <tr>
            <td></td>
            <td><span className='me-3'>(c)</span>Client changes residential address, phone number, or email and does not update the contact details within 2 weeks.</td>
          </tr>

          <tr>
            <th>15.2</th>
            <td>This contract will get auto-terminated if any of the below occurs:</td>
          </tr>

          <tr>
            <td></td>
            <td><span className='me-3'>(a)</span>The Customer ceases or notifies of its intention to cease trading as a business</td>
          </tr>

          <tr>
            <td></td>
            <td><span className='me-3'>(b)</span>The appointment of any type of insolvency administrator in respect of the property or affairs of the either Party;</td>
          </tr>

          <tr>
            <td></td>
            <td><span className='me-3'>(c)</span>If a situation arises which makes client legally unable to continue the contract e.g. if client is deceased, or if client gets arrested</td>
          </tr>

          <tr>
            <th>15.3</th>
            <td>In any of the of the scenarios described above, or any other events not covered above which results in termination the Customer forfeits the Initial Deposit to Drivus. The vehicle must be returned in the Returnable State and Refuelled as described above otherwise penalties apply</td>
          </tr>

        </tbody>

        <thead>

          <tr style={{ borderBottom: "2px solid black" }}>
            <th className='pt-2' scope="col">16</th>
            <th scope="col">Definitions</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <th></th>
            <td><b>Accident</b> means an unintended and unforeseen incident, including:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>a collision between the Vehicle and another vehicle or object, including animals and roadside infrastructure;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>rollovers; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(c)</span>a weather event, including hail Damage,</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'>that results in Damage or Third Party Loss.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>Authorised</b> Driver means any driver of the Vehicle who is 21 years of age or older, is approved by Us and who is recorded on the Rental Agreement prior to the Start of the Rental.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>Bond</b> means the amount of $1000 We collect from You at the Start of the Rental as security for the Rental Charges and other fees and charges incurred during Your rental.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>Damage</b> means:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>any loss or damage to the Vehicle including its parts, components and accessories, including the GPS unit, that is not fair wear and tear;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>towing and salvage costs;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(c)</span>assessing fees;</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(d)</span>claims administration fee; and</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(e)</span>Loss of Use,</td>
          </tr>

          <tr>
            <td></td>
            <td>and for the removal of doubt, any Damage to the windscreen, headlights, lights or tyres that makes the Vehicle unroadworthy is not fair wear and tear.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>Damage</b> Excess means the amount, including GST, up to which You must pay Us in the event of an Accident that causes Damage or Third Party Loss or the Vehicle has been stolen.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>End of the Rental</b> means the date and time shown in the Rental Agreement or the date and time the Vehicle is returned to Us, whichever is the later.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>GPS Tracking Device</b> means a GPS or other device that is fitted to the Vehicle that has electronic tracking capabilities to determine its location and other data including speed and fuel levels.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>Loss of Use</b> means Our loss calculated on a daily basis at the daily rate shown in the Rental Agreement because the Vehicle is being repaired or replaced if it is written off as a result of an Accident or it has been stolen.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>Major Breach</b> means a breach of any of clauses, 2.1, 2.2, 2.3, 2.5, 3.1, 3.2, 3.3, 3.4, 3.6, 4.1, 4.2, 4.3, 5.6, 5.7, 5.8, 5.9, 5.11, or 6.2 that causes Damage, theft of the Vehicle or Third Party Loss.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>Off Road</b> means any area that is neither a sealed or unsealed road and includes but is not limited to unformed roads, fire trails, tracks, river and tidal crossings, creek beds, beaches, streams, dams, rivers, flood waters, sand, deserts, rocks, fields and paddocks.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>Overhead Damage</b> means:</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(a)</span>Damage at or above the level of the top of the front windscreen of the Vehicle; or</td>
          </tr>

          <tr>
            <td></td>
            <td className='fw-bold'><span className='me-3'>(b)</span>Third Party Loss, </td>
          </tr>

          <tr>
            <td></td>
            <td>caused by:</td>
          </tr>

          <tr>
            <td></td>
            <td><span className='me-3'>(i)</span>contact between the part of the Vehicle that is at or above the level of the top of the front windscreen with objects overhanging or obstructing its path;</td>
          </tr>

          <tr>
            <td></td>
            <td><span className='me-3'>(ii)</span>objects being placed on the roof of the Vehicle; or</td>
          </tr>

          <tr>
            <td></td>
            <td><span className='me-3'>(iii)</span>You or any person standing or sitting on the roof of the Vehicle.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>Rental Charges</b> means the charges payable for renting the Vehicle from Us together with GST and any other taxes or levies which are all fully set out in the Rental Agreement.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>Rental Location</b> means the location from which the Vehicle is rented, as shown on the Rental Agreement.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>Rental Period</b> means the period commencing at the time shown in the Rental Agreement and concluding at the End of the Rental.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>Start of the Rental</b> means the date and time that the rental commences as shown in the Rental Agreement.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>Third Party Loss</b> means loss or damage to third party property, including other motor vehicles and any claim for third party loss of income.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>Underbody Damage</b> means any damage to the Vehicle caused by or resulting from contact between the underside of the Vehicle and any part of the roadway or any object or obstruction, including kerbs, gutters, speed or road humps, barriers or wheel stops and does not arise as a result of an impact with another vehicle.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>Unsealed Road</b> means a road that has been formed and constructed but is not sealed with a hard material such as tar, bitumen or concrete.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>Vehicle</b> means the Vehicle described in the Rental Agreement and includes its parts, components and accessories, including the GPS unit.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>We, Us, Our,</b> means SGSL Business Pty Ltd trading as Drivus ABN 76 621 790 127.</td>
          </tr>

          <tr>
            <td></td>
            <td><b>You, Your</b> means the person, whether it is an individual, a firm or company or government agency that rents the Vehicle from Us and whose name is shown in the Rental Agreement.</td>
          </tr>

        </tbody>

      </table>

      <h5 className='text-center fw-bold mt-4 mb-3'>Appendix</h5>

      <div className='row'>

        <div className='col-md-6'>

          <table className='text-dark fs-6'>

            <thead>

              <tr>
                <th scope="col">1.</th>
                <th scope="col">THIS AGREEMENT</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td></td>
                <td><span className='me-4'>(a)</span>Customer agrees to lease the Vehicle from Drivus on the Terms of this Agreement.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(b)</span>Customer must be at least 21 years of age and have the legal capacity to enter into a binding contract with Drivus.</td>
              </tr>

            </tbody>

            <thead>

              <tr>
                <th scope="col">2.</th>
                <th scope="col">TERM</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td></td>
                <td>The lease of the Vehicle commences on the Start Date and ends at close of business on the End Date. Any renewal of the Term is subject to the written authorisation of Drivus including the right of Drivus to increase the rate of the Lease Payment to an amount in the discretion of Drivus subject to acceptance by Customer.</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col">1.</th>
              <th scope="col">THIS AGREEMENT</th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td><span className='me-4'>(a)</span>Customer agrees to lease the Vehicle from Drivus on the Terms of this Agreement.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(b)</span>Customer must be at least 21 years of age and have the legal capacity to enter into a binding contract with Drivus.</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col">3.</th>
              <th scope="col">DELIVERY INSPECTION AND RETURN</th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td><span className='me-4'>(a)</span>Customer is responsible for the collection of the Vehicle from the premises of Drivus at its own cost <b>(“Delivery”).</b></td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(b)</span>Customer must inspect the interior and exterior of the Vehicle at the time Delivery to determine whether it corresponds to the Inspection Report and is fit for its specified purpose. By taking Delivery of the Vehicle, Customer is deemed to accept the Vehicle.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(c)</span>If at the time of Customer’s inspection, there is poor light or bad weather, Customer will have a further period of not less than 60 minutes from the time the Customer takes Delivery to report any damage not recorded in the Schedule.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(d)</span>Customer may take photographs of the Vehicle at the time of Delivery to record any defects on the interior or exterior of the Vehicle.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(e)</span>Customer otherwise acknowledges that the only existing damage to the Vehicle on the Agreement Date is that set out in the Inspection Report.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(f)</span>Customer must return the Vehicle to Drivus at the Location on the Return Date together with the keys, accessories and equipment set out in the Schedule.</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col">4.</th>
              <th scope="col">PAYMENT TERMS</th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td><span className='me-4'>(a)</span>Customer will pay to Drivus the agreed Lease Payments and any other amount payable under this Agreement punctually in accordance with the Schedule.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(b)</span>If any sums are not received on the due date for payment, Customer shall be obliged to pay the Late Payment Fee set out in the Schedule.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(c)</span>All payments for the lease of Vehicle are in Australian Dollars (AUD). Drivus will be entitled to add on GST for the Lease Payments and any other sum due and payable under these Terms.</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col">5.</th>
              <th scope="col">DRIVUS OBLIGATIONS</th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td><span className='me-4'>(a)</span>Drivus grants Customer exclusive use and possession of the Vehicle during the Term. Drivus reserves the right to substitute the Vehicle at no extra cost to the Customer for a comparable,type will be at Customer’s sole expense and Liability.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(h)</span>Customer will during the Term not allow any person to drive or operate the Vehicle who is:</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(i)</span>not a Listed Driver in the Schedule;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(ii)</span>does not hold a valid driver’s licence or who has not held an open class driver’s licence for any class of vehicle for less than one year;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(iii)</span>is under the age of twenty three years old; or</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(iv)</span>who is under the influence of a drug, liquor or other intoxicating substance;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(i)</span>Customer will during the Term be responsible for costs relating to fuel and tire puncture, lost or damages keys, parking or speeding fines and any other fines relating to traffic violations, toll and towing expenses for illegal parking.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(j)</span>Customer will not make any alteration, addition or modification to the Vehicle or otherwise including any paintwork or decals (unless a component is removed and it is immediately replaced by the same component or by one of the same like, make and model or an improved or enhanced component).</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(k)</span>Customer must comply with all relevant Laws, regulations and rules governing or relating to the use of the Vehicle.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(l)</span>Customer will be liable for the full amount of the cost of damages or Loss to the Vehicle including total insurable value (total loss damages) if the Vehicle is damaged or is in a total write-off situation and Drivus’ insurer will not cover the lost value, market value, sum insured, repair cost or salvage cost of the Vehicle.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(m)</span>Customer and any Listed Driver are jointly and severally responsible for compliance with terms and conditions of this Agreement.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(n)</span>Customer must not dispose of or sell, assign any right or interest, grant any Security Interest in, or part possession with the Vehicle during the Term.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(o)</span>Customer authorises Drivus to inspect the Vehicle during the Term. Drivus may take all steps necessary (including legal action) to recover the Vehicle in the event of a breach of this Agreement including the entering of Customer’s premises without committing a trespass.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(p)</span>Customer is responsible for the security of the Vehicle at all times during the Term.</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col">7.</th>
              <th scope="col">PERSONAL PROPERTY SECURITIES ACT 2009 (PPSA)</th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td><span className='me-4'>(a)</span>The rights of Customer to use the Vehicle are as a bailee only.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(b)</span>The Vehicle will remain the property of Drivus.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(c)</span>Customer grants Drivus a Security Interest in the Vehicle. This Agreement constitutes a Security Agreement for the purposes and within the meaning of the PPSA.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(d)</span>Customer agrees to keep the Vehicle separately identified and stored and that it will not consent to, grant, seek to grant or deal with any Security Interest in the Vehicle that are adverse to Drivus’ Security Interest.</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col">10.</th>
              <th scope="col">TERMINATION</th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td><span className='me-4'>(a)</span>These Terms will continue to apply until terminated by either Party as set out below.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(b)</span>Drivus may terminate these Terms without notice to Customer if:</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(i)</span>Customer has breached any material provision of the Terms including if any of the Lease Payments are past the due date for payment or there are excessive unpaid toll notices;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(ii)</span>Customer or a third-party has made a false statement in the Agreement or relevant documents; or</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(iii)</span>if Drivus believes Customer is making unauthorised or improper use of the Vehicle.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(c)</span>This Agreement will terminate by Notice of a Party if:</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(i)</span>the other Party breaches a term of this Agreement and fails to remedy such breach within 14 calendar days of being notified of such breach</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(ii)</span>the appointment of any type of insolvency administrator in respect of the property or affairs of the either Party;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(iii)</span>the entry or proposed entry by either Party into any scheme, composition or arrangement with any of its creditors;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(iv)</span>the Customer ceases or notifies of its intention to cease trading as a business.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(d)</span>In the event of termination for breach of these Terms, Drivus shall be entitled to:</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(i)</span>the Refundable Security Deposit, total Lease Payments arrears and any other sums accrued, due and unpaid at the date of termination;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(ii)</span>any of the Lease Payments paid in advance by Customer operate as a set off against the sums accrued, due and unpaid at the date of termination;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(iii)</span>the costs of all repairs and/or replacements at the date of termination to render the Vehicle in good and proper working condition (fair wear and tear excepted);</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(iv)</span>by way of agreed damages, a sum equal to the unpaid balance of the Lease Payments at the date of termination and any other sums due to Drivus by way of damages; and</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(v)</span>retake possession of the Vehicle.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(e)</span>Any termination of this Agreement shall not affect any accrued rights or liabilities of either Party, nor shall it affect any provision of this Agreement which is expressly or by implication intended to continue in force after such termination.</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col">11.</th>
              <th scope="col">LIMITATION OF LIABILILITY</th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td><span className='me-4'>(a)</span>To the extent permissible at law and except in the case of personal injury, death or damage caused by our negligence, Drivus is not liable for any indirect, punitive, incidental, special, consequential damages including without limitation any Claims, Losses, Liability, loss of profits, revenue, business or goodwill arising out of or in any way connected with the provision of or failure to provide any products or services under these Terms. Except as provided in these Terms, Drivus excludes all representations and warranties relating to the subject matter of these Terms, and the use and supply of the Vehicle.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(b)</span>Vehicle is provided “as is” and specific results cannot be guaranteed. It is the sole responsibility of Customer to determine that the Vehicle or any part of thereof meet Customer’s needs or are otherwise suitable for the purposes for which they are used.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(c)</span>These Terms are to be read subject to any legislation that prohibits or restricts the exclusion, restriction or modification of any implied warranties, conditions, guarantees or obligations. If such legislation applies, to the extent possible Drivus limits its Liability as follows, at its option:</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(i)</span>in the case of products including any digital products (a) the replacement of the products or the supply of equivalent products; (b) the repair of the products; (c) the payment of the cost of replacing the products or of acquiring equivalent products; or (d) the payment of having the products repaired; or</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(ii)</span>in the case of services, the supply of the services again or the payment of the cost of having the services supplied again.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(d)</span>This clause survives the termination or expiry of these Terms for whatever reason.</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col">18.</th>
              <th scope="col">GENERAL</th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td>Entire Agreement. This Agreement (and any documents executed in connection with it) embodies the entire understanding and agreement between the Parties as to the subject matter of this Agreement, superseding all previous agreements, understandings and representations between the Parties.</td>
              </tr>

              <tr>
                <td></td>
                <td>Relationship. Nothing in this Agreement will constitute or be deemed to constitute a partnership, joint venture or agency between the Parties.</td>
              </tr>

              <tr>
                <td></td>
                <td>Variation. This Agreement may only be varied in writing by the Parties.</td>
              </tr>

              <tr>
                <td></td>
                <td>Severability. If any part of provision of this Agreement is invalid, unenforceable or in conflict with the Law, that part or provision is replaced with a provision which, as far as possible, accomplishes the original purpose of that part of the provision otherwise it is to be read down or severed to the extent necessary without affecting the validity or enforceability of the remaining provisions.</td>
              </tr>

              <tr>
                <td></td>
                <td>Waiver. No right under this Agreement is waived or deemed to be waived except by notice in writing signed by the Party waiving the right.</td>
              </tr>

              <tr>
                <td></td>
                <td>Assignability/Transferability/Novation. The rights granted to Customer under this Agreement may be assigned only with the written consent of Drivus. Customer must immediately notify Drivus of any proposed change of ownership or management of Customer.</td>
              </tr>

              <tr>
                <td></td>
                <td>Joint and several. Any warranty representation or obligation, which binds or benefits two or more Persons under this Agreement binds or benefits those Persons jointly and separately.</td>
              </tr>

              <tr>
                <td></td>
                <td>Further assurance. Each Party must promptly execute all documents and do all things that another Party from time to time reasonably requests to effect, perfect or complete these Terms and all transactions incidental to it.</td>
              </tr>

              <tr>
                <td></td>
                <td>Implied Terms. Any implied term under Law that can be excluded is expressly excluded and no term is to be implied as being a term of this Agreement unless by Law it cannot be excluded.</td>
              </tr>

              <tr>
                <td></td>
                <td>Successors and assigns. A Person includes the trustee, executor, administrator, successor in title and permitted assign of that Person. This clause must not be construed as permitting a Party to assign any right or obligation under this Agreement.</td>
              </tr>

              <tr>
                <td></td>
                <td>Survival of Agreement. This Agreement shall endure to the benefit of and be binding upon the Parties and their respective successors, trustees, heirs, executors, administrators and permitted assigns or receivers but will not endure to the benefit of any other Persons. The terms,covenants, conditions and provisions of this Agreement which are capable of having effect after the expiration of this Agreement will remain in full force and effect following the expiration of this Agreement.</td>
              </tr>

              <tr>
                <td></td>
                <td>Law and Jurisdiction. The laws of the State of New South Wales, Australia governs this Agreement. Each of the Parties irrevocably submits to the non-exclusive jurisdiction of the courts of New South Wales (and any court that may hear appeals from any of those courts for any proceeding in connection with this Agreement) and waives any right it may have to claim that those courts are an inconvenient forum.</td>
              </tr>

              <tr>
                <td></td>
                <td>Change in any Laws. if it is determined by Drivus that the provision of its supply under this Agreement, or any relevant products or services, is no longer compliant with any applicable Laws, Drivus may discontinue administering the relevant supply, products or services or otherwise alter the way it is being administered to comply with the relevant Laws.</td>
              </tr>

              <tr>
                <td></td>
                <td>Counterparts. This Agreement may be executed in counterparts, each of which will be deemed to be an original and all of which together will constitute one instrument and Agreement provided that those counterparts have been exchanged.</td>
              </tr>

            </tbody>

          </table>

        </div>

        <div className='col-md-6'>

          <table className='text-dark fs-6'>

            <thead>
              <th scope="col"></th>
              <th scope="col"></th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td>alternative vehicle should the Vehicle not be available for any reason during the Term.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(b)</span>Drivus shall during the Term keep the Vehicle registered and maintain its own comprehensive insurance policies and CTP for the Vehicle with a reputable insurance company. Customer agrees to co-operate with Drivus in pursuing or defending any Claim or action resulting from the use of the Vehicle.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(c)</span>Drivus shall during the Term properly maintain and service the Vehicle to a level that it is safe and roadworthy in accordance with the Law and the manufacturer’s servicing guidelines.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(d)</span>In the event that the Vehicle needs to be maintained or repaired, the Customer must make all reasonable efforts to have the Vehicle available to Drivus for maintenance and repair in accordance with the reasonable directions of Drivus.</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col">6.</th>
              <th scope="col">CUSTOMER OBLIGATIONS</th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td><span className='me-4'>(a)</span>Customer must not use the Vehicle during the Term without a current driver’s licence or permit it to be used by any other person without a current driver’s licence. Customer warrants that the information, Customer details and any other documentation it provides to Drivus is accurate, complete, correct and up to date.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(b)</span>Customer must exercise reasonable care, skill and diligence in exercising use of the Vehicle and use the Vehicle in a responsible manner in accordance with its intended use.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(c)</span>Customer must keep the Vehicle in good and useable condition at all times (service, fair wear and tear excepted) until returned to Drivus.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(d)</span>During the Term, Customer must within 24 hours notify Drivus and report to the nearest police station if the Vehicle is damaged, stolen or interfered with in any way. In the event of an accident, the Customer must record the time, date and location of the accident, and the other party’s name, address, vehicle registration number, insurance details and not admit Liability for the accident. Customer is responsible for towing of the Vehicle to the address of Drivus set out in this Agreement at the expense of Customer. Customer authorises Drivus’ insurer at its sole discretion to defend or settle any legal proceedings for accidents</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(e)</span>Customer must not during the Term permit any person other than a Listed Driver in the Schedule to use or drive the Vehicle. Customer assumes all risks whatsoever of Liability for breach of this clause.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(f)</span>Customer will not permit the Vehicle to be used for Ride Sharing or any type of racing or contest during the Term.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(g)</span>Customer will only use the fuel specified by the manufacturer of the Vehicle. All costs and damages associated with using the wrong fuel</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col"></th>
              <th scope="col"></th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td><span className='me-4'>(e)</span>Drivus may register any actual or impending Security Interest in relation to a Security Interest in the Vehicle and the proceeds arising in respect of any dealing in the Vehicle.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(f)</span>Customer consents to Drivus registering its Security Interest on the Personal Property Securities Register and agrees to provide all assistance reasonably required by Drivus to facilitate registration.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(g)</span>Customer agrees not to in any way assign, charge, lease or otherwise deal with the Vehicle in such a manner as to create a Security Interest over the Vehicle in favour of any third party.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(h)</span>Customer waives its rights to receive any notice under the PPSA (including notice of verification statement) unless the notice is required by the PPSA and cannot be excluded.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(i)</span>Drivus and Customer agree each of the following requirements or rights under the PPSA do not apply to the enforcement of Drivus’s Security Interest in the Vehicle or of this Agreement:</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(i)</span>any requirement for Drivus to give Customer a notice of removal or accession;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(ii)</span>any requirement for Drivus to give Customer a notice of Drivus’s proposed disposal of the Vehicle;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(iii)</span>any requirement for Drivus to include in a statement of account, after disposal of the Vehicle, the details of any amounts paid to other secured parties;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(iv)</span>any requirement for Drivus to give Customer a statement of account if Drivus does not dispose of the Vehicle;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(v)</span>any right Customer has to redeem the Vehicle before Drivus exercises a right of disposal;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(vi)</span>any right Customer has to reinstate this Agreement before Drivus exercises a right of disposal of the Vehicle.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(j)</span>Expressions defined in the PPSA have the same meaning when used in these Terms and Conditions.</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col">8.</th>
              <th scope="col">Title</th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td><span className='me-4'>(a)</span>Customer acknowledges that Drivus owns the Vehicle and in all circumstances Drivus retains title to the Vehicle including if Customer goes into liquidation or becomes bankrupt during the Term. Legal and beneficial title to the Vehicle remains with Drivus.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(b)</span>Uplift of the Vehicle will constitute delivery to the Customer.</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col">9.</th>
              <th scope="col">DATA</th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td><span className='me-4'>(a)</span>Drivus may hold Personal Information about Customer such as Customer’s name, contact details, information for identification purposes and information about Customer’s financial and bank account details (“Data”). Drivus will also hold Data relating to the provision of the Vehicle and information provided by Customer in connection with this Agreement or the Vehicle.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(b)</span>Customer agrees that Drivus may use the Data for the purpose of providing its products and services to Customer. This licence also extends to trusted third parties that Drivus works with to the extent necessary to provide its products and services to Customer.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(c)</span>Customer must notify Drivus of any change in Customer’s Data within 7 days of the change.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(d)</span>The Data may be used or disclosed to enable Drivus to perform its obligations under this Agreement and to ensure that Customer performs its obligations under this Agreement as permitted by the Privacy Act 1998 (Cth).</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col">12.</th>
              <th scope="col">INDEMNITY</th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td><span className='me-4'>(a)</span>Customer agrees to defend, indemnify and hold Drivus, its affiliates, employees, agents, and contributors, harmless from and against all actions, suits, Claims, demands, Liabilities, costs, expenses, Losses and damage (including legal fees and debt collector’s fees on a full indemnity basis) brought against or sustained by Drivus, which:</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(ii)</span>is directly or indirectly caused by Customer’s breach of any of these Terms;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(iii)</span>is directly or indirectly caused by any willful, reckless or negligent act of Customer;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(iv)</span>concerns personal injury to any person caused or contributed to by Customer;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(v)</span>is caused by Customer’s act or omission and constitutes a Loss of or damage to property;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(vi)</span>is brought by any third-party in respect of personal injury, death or damage to third-party property and arises from Customer’s act or omission; or</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(vii)</span>arises from Customer’s act or omission</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col">13.</th>
              <th scope="col">DISPUTES</th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td><span className='me-4'>(a)</span>Compulsory process. A Party must not start arbitration or court proceedings (except proceedings seeking interlocutory relief) in respect of a dispute arising out of these Terms (Dispute) unless it has complied with this clause.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(b)</span>Notification. A Party claiming that a Dispute has arisen must notify each other Party to the Dispute giving details of the Dispute.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(c)</span>Initial period – efforts to resolve Dispute. During the 15-calendar day period after a notice is given (or longer period agreed in writing by the Parties to the Dispute) (Initial Period) each Party to the Dispute (Disputant) covenants with the other to cooperate and take all reasonable steps necessary to attempt to resolve the Dispute.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(d)</span>Mediation. If the Disputants are unable to resolve the Dispute within the Initial Period, each Disputant agrees that the Dispute shall be referred for mediation, at the request of any Disputant, to:</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(i)</span>a mediator agreed on by the Disputants; or</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(ii)</span>if the Disputants are unable to agree on a mediator within seven days after the end of the Initial Period, then the Disputants must submit the Dispute for mediation through the Chair of Resolution Institute (ACN 008 651 232) or the Chair’s designated representative and the Resolution Institute Mediation Rules shall apply to the mediation.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(e)</span>Role of mediator. The role of any mediator is to assist in negotiating a resolution of the Dispute.  A mediator may not make a decision that is binding on a Disputant unless that Disputant has so agreed in writing.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(f)</span>Information. Any information or documents disclosed by a Disputant under this clause must be kept confidential and may not be used except to attempt to resolve the Dispute.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(g)</span>Costs of mediation. Each Disputant must pay its own costs of complying with this clause. The Disputants must pay equally the costs of any mediator engaged.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(h)</span>Location, timing and attendance. The mediation will be held in Sydney, Australia, within 30 days after expiry of the Initial Period. Each Disputant agrees to attend the mediation by a representative having full authority to resolve the dispute. At the mediation each Disputant may be represented by one or more legal representative</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(i)</span>Failure to resolve. If the dispute fails to resolve at mediation or if one of the Disputants fails or refuses to attend the mediation, the mediator will be requested to inform each Disputant in writing that the mediation has been terminated without resolution (Mediation Termination Notice). Upon receipt of Mediation Termination Notice, the dispute resolution process will be terminated. A party to a dispute will only be entitled to pursue other remedies available to it at law or otherwise, after receipt of Mediation Termination Notice.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(j)</span>Confidentiality. All communications concerning negotiations made by the Disputants arising out of and in connection with this dispute resolution clause are confidential and to the extent possible, must be treated as “without prejudice” other applicable Taxes. We will be entitled to add on GST for any supply in Australia. If GST or any other applicable Tax is imposed on any supply made under or in accordance with this Agreement, then the GST or other applicable Tax payable must be paid by you.</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col">14.</th>
              <th scope="col">WARRANTY</th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td><span className='me-4'>(a)</span>Drivus makes no warranty in relation to the suitability of the Vehicle for Customer’s requirements.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(b)</span>Each Party warrants to the other Party that:</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(i)</span>it has been duly organised, properly registered as a legal entity and is validly existing under the laws of the jurisdiction of its organisation;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(ii)</span>it has full power to enter into and perform its obligations under this Agreement and has taken all necessary corporate and other action to approve and authorise the transactions contemplated by this Agreement;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(iii)</span>this Agreement constitutes its valid and binding obligations enforceable in accordance with its terms; and</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(iv)</span>all relevant consents (if any) to its entering into this Agreement have been obtained and neither the entering into nor the performance by it of its obligations under this Agreement will constitute or result in any breach of any contractual or legal restriction binding on it or on its assets or undertaking.</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col">15.</th>
              <th scope="col">NOTICES</th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td><span className='me-4'>(a)</span>Any notice to be given to one Party by another under this Agreement:</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(i)</span>must be in legible writing and in English addressed in accordance with Address for notices;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(ii)</span>must be delivered to the recipient in person or by courier hand delivery, by prepaid ordinary post or by email; and</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(iii)</span>must be signed by an authorised officer of the Party giving or making it, or (on its behalf) by any solicitor, director, secretary or authorised agent of that Party.</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(b)</span>A notice is regarded as being given by the sender and received by the recipient:</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(i)</span>if by delivery in person, when delivered to the recipient;</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(ii)</span>if by post, four (4) calendar days from and including the date of postage; or</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(iii)</span>if by email, immediately unless sender receives an automated reply that the email was not delivered by reason of the address being invalid or otherwise</td>
              </tr>

              <tr>
                <td></td>
                <td><span className='me-4'>(c)</span>If a notice is received on a day which is not a business day or after 5:00pm on a business day, that notice is regarded as received 9:00am on the following business day.</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col">16.</th>
              <th scope="col">COMPLAINTS</th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td>For any complaints about any of our products or services, you must bring it our attention at the time so that we may use our best endeavours to rectify the situation.</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col">17.</th>
              <th scope="col">TAXES AND CHARGES</th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td>Unless otherwise expressly stated, all amounts stated to be payable under this Agreement are exclusive of goods and services tax (GST) and any covenants, conditions and provisions of this Agreement which are capable of having effect after the expiration of this Agreement will remain in full force and effect following the expiration of this Agreement.
                  Law and Jurisdiction. The laws of the State of New South Wales, Australia governs this Agreement. Each of the Parties irrevocably submits to the non-exclusive jurisdiction of the courts of New South Wales (and any court that may hear appeals from any of those courts for any proceeding in connection with this Agreement) and waives any right it may have to claim that those courts are an inconvenient forum.
                  Change in any Laws. if it is determined by Drivus that the provision of its supply under this Agreement, or any relevant products or services, is no longer compliant with any applicable Laws, Drivus may discontinue administering the relevant supply, products or services or otherwise alter the way it is being administered to comply with the relevant Laws.
                  Counterparts. This Agreement may be executed in counterparts, each of which will be deemed to be an original and all of which together will constitute one instrument and Agreement provided that those counterparts have been exchanged.</td>
              </tr>

            </tbody>

            <thead>
              <th scope="col">19.</th>
              <th scope="col">DEFINITIONS</th>
            </thead>

            <tbody>

              <tr>
                <td></td>
                <td>In these Terms, the following references mean:
                  Agreement means this agreement between Drivus and Customer for the lease of the Vehicle.
                  Claim means any claim, cost, damages, debt, expense, liability, loss, suit, action, demand, cause of action or proceeding of any kind irrespective of: (a) how or when it arises; (b) whether it is actual or contingent; (c) whether or not it is in respect of legal or other costs, damages, expenses, fees or losses; (d) whether or not it is in respect of a breach of trust or of a fiduciary or other duty or obligation; and (e) whether or not it arises at Law or otherwise (including by way of contribution or indemnity).
                  CTP means compulsory third party insurance.
                  GST means GST within the meaning of the A New Tax System (Goods and Services Tax) Act 1999 (Cth).
                </td>
              </tr>

              <tr>
                <td></td>
                <td>Law means all laws including rules of common law, principles of equity, statutes, regulations, proclamations, ordinances, by-laws, rules, regulatory principles and requirements, statutory rules of an industry body, statutory mandatory codes of conduct, writs, orders, injunctions and judgments.</td>
              </tr>

              <tr>
                <td></td>
                <td>Liability means any debt, obligation, cost (including legal costs, deductibles or increased premiums), expense, Loss, damage, compensation, charge or liability of any kind, including those arising from third Party Claims, those that are prospective or contingent and those the amount of which is not ascertained or ascertainable, and whether arising under breach of contract, restitution, pursuant to statute or otherwise at law or in equity.
                  Loss means any cost, expense, loss, damage or liability whether direct, indirect or consequential (including pure economic loss), present or future, ascertained or unascertained, actual, prospective or contingent, or any fine or penalty and includes legal costs.
                  Person means any person that is recognised at law whether it be a natural person, an entity or corporation.
                  Personal Information means information about an individual whose identity is apparent or can reasonably be ascertained from that information.
                  Ride Sharing means car-pooling where multiple people use the same vehicle to arrive at a similar destination and includes an arrangement in which a passenger travels in a vehicle for free including when arranged by means of a website or mobile application.</td>
              </tr>

            </tbody>

          </table>

        </div>
      </div>

    </div>
  )
}

export default Terms