import "./ReleaseNotes.css";
const ReleaseNotes = () => {
  return (
    <div id="release-notes-container">
      <h1>What's New?</h1>
      <h2>v1.24.0</h2>
      <ul>
        <li>
          <b>Preferred Names:</b> Users can now set preferred names for both
          facilities and participants, which will be reflected consistently
          across the application for a more personalised experience.
        </li>
        <br />
        <li>
          <b>Roster Settings:</b> Introducing customisable shift timing
          templates for both standard and customised shifts, giving you greater
          flexibility in managing your roster.
        </li>
        <br />
        <li>
          <b>Timesheet Downloads:</b> Timesheets can now be downloaded in CSV
          and PDF formats based on the selected frequency, making payroll and
          reporting easier than ever.
        </li>
        <br />
        <li>
          <b>ID Documentation:</b> Implementation of 100 points of ID
          verification to strengthen documentation and compliance processes.
        </li>
        <br />
        <li>
          <b>Roster Manager:</b> New restrictions prevent the creation of shifts
          if they exceed preset hour limits, helping to maintain workforce
          compliance and avoid scheduling errors.
        </li>
        <br />
        <li>
          <b>Industry Introduction in Facility:</b> Facilities now feature an
          industry introduction section to better categorise and manage
          facility-specific information.
        </li>
        <br />
        <li>
          <b>Manage Invoices:</b> Enhanced invoice management tools improve
          tracking and processing for more efficient financial workflows.
        </li>
        <br />
        <li>
          <b>Pay Guides:</b> New pay guides tailored for the nursing industry
          have been introduced to assist with accurate and compliant payroll
          processing.
        </li>
        <br />
      </ul>
      <h2>v1.23.0</h2>
      <ul>
        <li>
          <b>Roster Manager calendar view – new UI:</b> Introduced a refreshed
          calendar view for better shift visualization.
        </li>
        <br />
        <li>
          <b>Expand and collapse of Roster Manager cards:</b> Quickly expand or
          minimise shift cards for cleaner navigation.
        </li>
        <br />
        <li>
          <b>Side navigation bar expand and collapse:</b> Customise your
          workspace with a collapsible side navigation panel.
        </li>
        <br />
        <li>
          <b>Roster Manager – shift reports:</b> Generate and view detailed
          reports on scheduled shifts directly in Roster Manager.
        </li>
        <br />
        <li>
          <b>Drag and drop to reassign shifts:</b> Easily move shifts between
          staff with a simple drag-and-drop action.
        </li>
        <br />
        <li>
          <b>Publish shifts with an end date:</b> Define and limit the
          publishing period of shifts with a set end date.
        </li>
        <br />
        <li>
          <b>My Profile › My Availability:</b> Restrict scheduling beyond set
          hours – Prevent shifts from being scheduled outside user-defined
          availability.
        </li>
        <br />
        <li>
          <b>Dashboard enhancements:</b> Added a widget for rejected shifts and
          enabled week selection in the Roster Manager widget.
        </li>
        <br />
        <li>
          <b>Preferred Staff selection UI upgraded:</b> Improved interface for
          selecting preferred staff during scheduling.
        </li>
        <br />
        <li>
          <b>Mobile › My Availability with sub-tabs:</b> New mobile layout
          includes separate tabs for Availability and Reports.
        </li>
        <br />
        <li>
          <b>Funds Tracker:</b> Miscellaneous fund is added in the funds.
        </li>
        <br />
        <li>
          <b>Accounting</b>
          <ol>
            <li>
              <b>General Ledger:</b> Out of balance restriction – Prevents
              posting entries that result in an unbalanced ledger.
            </li>
            <br />
            <li>
              <b>Customized email to sales:</b> Allows sending personalised
              emails directly to the sales team.
            </li>
            <br />
            <li>
              <b>Full account list selection during record creation:</b> Enables
              selection from the complete chart of accounts when creating
              records.
            </li>
            <br />
            <li>
              <b>Services invoices to sales:</b> Service-based invoices are now
              automatically reflected in sales data.
            </li>
            <br />
            <li>
              <b>Chart of Accounts › Net values in category names:</b> Displays
              net values alongside account categories for quick financial
              insights.
            </li>
          </ol>
        </li>
      </ul>

      <h2>v1.22.0</h2>

      <ul>
        <li>
          <b>Quick‑Access Menu in Roster Manager:</b> The menu icon now provides
          quick access to key tools—Auto-schedule, Publish roster, Manage
          invoices, Roster settings, and the new Under/Over Efficiency Report—so
          you can jump into actions faster.
        </li>
        <br />

        <li>
          <b>Under/Over Rostering Efficiency Report:</b> A new dynamic report
          helps you monitor staff status—under‑rostering, fully rostered, or
          over‑rostering—for any selected date. This gives schedulers an instant
          overview to balance shifts more effectively.
        </li>
        <br />

        <li>
          <b>Sleepover Allowance & Vehicle Reimbursement:</b>
          <ol>
            <li>
              <b>Sleepover Allowance:</b> A standard allowance of $66.02 per
              night is now available under <b>Admin → Staff</b>.
            </li>
            <li>
              <b>Vehicle Reimbursement:</b> Staff can now claim vehicle
              reimbursements at $0.99/km, improving accuracy and fairness in
              expense tracking.
            </li>
          </ol>
        </li>
        <br />

        <li>
          <b>Performance Management Goals:</b> Facility and Org Admins can now
          create and assign goals directly within the Performance Management
          System (PMS), promoting structured performance tracking and staff
          development.
        </li>
        <br />

        <li>
          <b>Timesheet Cleanup:</b> The system will now automatically remove the
          “Break” column in timesheets if no break is recorded, offering a
          cleaner and more focused timesheet view.
        </li>
        <br />

        <li>
          <b>Mobile Alerts:</b> Staff using the mobile app will now receive
          alerts 15 minutes before scheduled login or logout times, improving
          shift adherence and punctuality.
        </li>
        <br />

        <li>
          <b>Bug Fixes & Performance Improvements:</b> A wide range of bug fixes
          and behind-the-scenes improvements have been implemented across the
          platform, delivering a more stable and responsive experience.
        </li>
        <br />
      </ul>
      <h2>v1.21.0</h2>

      <ul>
        <li>
          <b>Facility-Wise Data Access:</b> The application now supports
          facility-specific data segmentation for more accurate insights and
          management.
        </li>
        <br />
        <li>
          <b>Facility Admin Role:</b> A new user type – Facility Admin – can now
          be created to manage and monitor specific facilities independently.
        </li>
        <br />
        <li>
          <b>T Learner Module:</b> Introduced a built-in tutorial system
          tailored to the logged-in user, providing step-by-step guidance
          throughout the application.
        </li>
        <br />
        <li>
          <b>Facility-Based Settings:</b> Customize and manage settings at the
          facility level using the new Facility Settings section.
        </li>
        <br />
        <li>
          <b>Geolocation & Supervisor Signature in Timesheets:</b> Capture
          supervisor signatures and geolocation data directly within the
          timesheet for added verification and compliance.
        </li>
        <br />
        <li>
          <b>Time Round-Off Control:</b> Admin now have the ability to enable or
          disable time round-off as per their preferences.
        </li>
        <br />
        <li>
          <b>Email Notifications for Shift Creation:</b> Stay informed with
          automated email notifications whenever a new shift is created.
        </li>
        <br />
        <li>
          <b>Staff Filtering in EOI:</b> Improved the Expression of Interest
          (EOI) section with advanced staff filtering capabilities.
        </li>
        <br />
        <li>
          <b>Nickname Option for Users:</b> Users can now opt to use a nickname
          for better personalization.
        </li>
        <br />
        <li>
          <b>Staff History Tracking:</b> Track changes and updates related to
          staff profiles with the new history tracking feature.
        </li>
        <br />
        <li>
          <b>My Profile in Mobile:</b> My Profile module is introduced in the
          mobile application.
        </li>
        <br />
      </ul>

      <h2>v1.20.0</h2>

      <ul>
        <li>
          <b>UI/UX:</b> A complete new User Interface and User Experience is
          developed throughout the application.
        </li>
        <br />
        <li>
          <b>Major Bug Fixes:</b> Major bug fixes implemented throughout the
          application to improve stability and performance.
        </li>
        <br />
        <li>
          <b>Customisable Dashboard:</b> Customisable dashboard introduced to
          suit your workflow and preferences.
        </li>
        <br />
        <li>
          <b>Roster Manager – Create Shift:</b> Cleaner layout with only Create
          Shift and Cancel buttons for a simplified user experience.
        </li>
        <br />
        <li>
          <b>Accounting:</b>
          <ol>
            <li>
              <b>Tax Calculation:</b> Enhanced accuracy for sales tax across all
              transactions.
            </li>
            <li>
              <b>General Ledger:</b> Default two-line entries with the option to
              add more, plus a Cr/Dr dropdown for easy classification.
            </li>
            <li>
              <b>Email Notifications:</b> Automated emails triggered for new or
              updated Sales and RFQs.
            </li>
            <li>
              <b>Account List Template:</b> Full template with built-in
              validations to ensure data accuracy.
            </li>
            <li>
              <b>Notes Field:</b> Added freeform notes for context in
              transactions.
            </li>
            <li>
              <b>Record History Tracking:</b> Activity log now visible on each
              record for auditability.
            </li>
          </ol>
        </li>
        <br />
      </ul>

      <h2>v1.19.0</h2>

      <ul>
        <li>
          <b>Auto Scheduling in Roster Management:</b> Automatically assign
          shifts to staff based on availability and preferences, streamlining
          the scheduling process.
        </li>
        <br />
        <li>
          <b>Publish Functionality in Roster Management:</b> Notify staff
          instantly when shifts are assigned through auto scheduling, ensuring
          timely communication.
        </li>
        <br />
        <li>
          <b>Rejected Shifts:</b> View all previously rejected shifts along with
          detailed reports. These shifts can now be reassigned using the auto
          schedule feature.
        </li>
        <br />
        <li>
          <b>Recurring Fortnightly Shifts:</b> Set up shifts that recur every
          two weeks, reducing manual scheduling efforts.
        </li>
        <br />
        <li>
          <b>Participant Schedule – Manage Staff Preferences:</b> Customise
          staff preferences directly within the participant's schedule for more
          tailored assignments.
        </li>
        <br />
        <li>
          <b>Recurring Holiday Rates for Sleepover Shifts:</b> Apply appropriate
          holiday rates automatically to recurring sleepover shifts.
        </li>
        <br />
        <li>
          <b>Sleepover Allowance for Weekends and Holidays:</b> Ensure staff
          receive correct allowances for sleepover shifts during weekends and
          holidays.
        </li>
        <br />
        <li>
          <b>Participant Snapshot in Participant Journal:</b> Quickly access
          critical information such as allergic conditions and mental health
          notes within the participant's journal.
        </li>
        <br />
        <li>
          <b>Reimbursements – Vehicle Type Dropdown:</b> While submitting
          reimbursements, staff can now select their vehicle type—Electric or
          Fuel—for accurate processing.
        </li>
        <br />
        <li>
          <b>Customisable Forms:</b> Empower users to create and manage custom
          forms tailored to specific needs, enhancing data collection and
          workflow flexibility.
        </li>
        <br />
        <li>
          <b>T-Sign Template Creation:</b> Introduced standardised templates
          within the T-Sign module, streamlining document generation and
          ensuring consistency across the board.
        </li>
        <br />
        <li>
          <b>Participant and Payroll Dashboards:</b> Implemented dedicated
          dashboards for participants and payroll administrators, providing
          real-time insights into participant funds and payroll activities.
        </li>
        <br />
        <li>
          <b>UI/UX Enhancements:</b> Revamp the user interface and experience
          across the application for improved navigation, accessibility, and
          overall user satisfaction.
        </li>
        <br />
        <li>
          <b>Accounting:</b>
          <ol>
            <li>
              <b>Automatic Tax Population from Entity Details:</b> When creating
              new accounts, tax information now auto-populates based on the
              associated entity's details, reducing manual entry and ensuring
              consistency.
            </li>
            <li>
              <b>Account List Generation from Entity Details:</b> The system now
              automatically generates a list of relevant accounts derived from
              the entity's information, streamlining the setup process and
              minimizing errors.
            </li>
            <li>
              <b>Time Period Association:</b> Link accounts to specific time
              periods for improved financial reporting accuracy.
            </li>
            <li>
              <b>Active/Inactive Status Management:</b> Easily mark accounts as
              active or inactive to maintain an organized ledger without losing
              historical data.
            </li>
            <li>
              <b>Account List Import:</b> Quickly import bulk account data using
              CSV or Excel files, streamlining the setup process.
            </li>
            <li>
              <b>Account List Editing:</b> Modify account details such as names,
              types, and codes directly within the system for better control and
              accuracy.
            </li>
          </ol>
        </li>
        <br />
      </ul>

      <h2>v1.18.0</h2>

      <ul>
        <li>
          <b>Accounting:</b> Access advanced accounting functionalities to
          streamline financial operations <br />
          <ol>
            <li>
              <b>Payroll:</b> Manage employee compensation, deductions, and tax
              filings efficiently.
            </li>
            <li>
              <b>Sales and Purchases:</b> Track sales invoices and purchase
              orders to maintain accurate financial records.
            </li>
            <li>
              <b>Chart of Accounts:</b> Organise financial accounts
              systematically to ensure accurate reporting.
            </li>
            <li>
              <b>General Ledger:</b> Maintain a comprehensive record of all
              financial transactions.
            </li>
            <li>
              <b>Reports:</b> Generate detailed financial reports, including
              Profit and Loss, Superannuation, Balance sheets, Reconciliation,
              Client Accounts, Activity statements, Wages, and Departmental
              Accounts.
            </li>
            <li>
              <b>Settings:</b> Customise accounting preferences to align with
              organisational policies and compliance requirements.
            </li>
          </ol>
        </li>
        <br />

        <li>
          <b>Custom Shifts:</b> Create and manage shift types tailored to your
          organisation's unique scheduling needs.
        </li>
        <br />

        <li>
          <b>Holiday Rates for Recurring Shifts:</b> Automatically apply holiday
          pay rates to recurring shifts that fall on designated holidays,
          ensuring accurate compensation.
        </li>
        <br />

        <li>
          <b>Funds Tracker - Services:</b> After adding funds, users can now
          select specific service items to associate with the allocated funds,
          ensuring precise tracking.
        </li>
        <br />

        <li>
          <b>Invoice Generation:</b> Invoices generated within the system are
          automatically linked to the Accounting module, ensuring real-time
          updates to financial records.
        </li>
        <br />

        <li>
          <b>Participant Scheduling:</b> Efficiently schedule participants for
          various activities or services, enhancing coordination and resource
          allocation.
        </li>
        <br />

        <li>
          <b>My Availability Management:</b> View and manage availability of
          staff to optimise scheduling and ensure adequate coverage.
        </li>
        <br />

        <li>
          <b>Shift Deletion for Service-Linked Shifts:</b> Delete shifts even if
          they are associated with specific services, providing greater
          flexibility in schedule management.
        </li>
        <br />

        <li>
          <b>Invoice Redesign:</b> Complete redesign of invoices across the web
          app, including PDF changes for ICT Timesheet, Roster Timesheet,
          Payroll Invoice, and Participant Services.
        </li>
        <br />

        <li>
          <b>Billable Hours Tracking:</b> Accurately track billable hours for
          services rendered, facilitating precise invoicing and financial
          reporting.
        </li>
        <br />

        <li>
          <b>Editable Shift Timings for All Shift Types:</b> Modify shift start
          and end times across all shift types, allowing for dynamic scheduling
          adjustments.
        </li>
        <br />

        <li>
          <b>ICT Timesheet – Time picker:</b> Implement a user-friendly time
          picker for ICT timesheets, simplifying time entry and tracking.
        </li>
        <br />

        <li>
          <b>ICT Timesheet – Accounting Integration:</b> Integrate ICT timesheet
          data with accounting systems for seamless financial reconciliation and
          reporting.
        </li>
        <br />
      </ul>
    </div>
  );
};

export default ReleaseNotes;
