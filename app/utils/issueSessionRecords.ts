export const issueSessionRecords = [
  {
    title: 'Server Downtime During Peak Hours',
    description:
      'Our main application server experienced unexpected downtime yesterday between 2 PM and 4 PM EST, coinciding with peak user activity. Initial investigation suggests a possible memory leak in our latest deployment. We need to analyze server logs, review recent code changes, and implement additional monitoring to prevent future occurrences.',
    status: 'OPEN',
    createdAt: '2024-10-03T09:15:23Z',
    updatedAt: '2024-10-03T11:42:57Z',
  },
  {
    title: 'Mobile App Crash on Android 13',
    description:
      'Multiple users have reported that our mobile app crashes immediately upon launch on devices running Android 13. This issue seems to affect approximately 15% of our Android user base. We need to investigate compatibility issues with the latest Android version and release a hotfix as soon as possible.',
    status: 'IN_PROGRESS',
    createdAt: '2024-10-02T14:30:11Z',
    updatedAt: '2024-10-03T08:55:39Z',
  },
  {
    title: 'Data Synchronization Lag in Cloud Backup',
    description:
      'Users are reporting a significant delay in data synchronization between local devices and our cloud backup service. Some users are experiencing delays of up to 30 minutes, which is well beyond our SLA of 5 minutes. We need to optimize our sync algorithms and potentially scale up our backend infrastructure to handle the increasing data load.',
    status: 'OPEN',
    createdAt: '2024-10-01T11:20:45Z',
    updatedAt: '2024-10-03T10:15:22Z',
  },
  {
    title: 'Incorrect Tax Calculation for International Orders',
    description:
      'Our e-commerce platform is calculating incorrect tax amounts for orders shipped to certain international destinations. This is causing confusion among customers and potential legal issues. We need to review our tax calculation logic, update our database of international tax rates, and issue refunds where necessary.',
    status: 'IN_PROGRESS',
    createdAt: '2024-09-30T16:45:33Z',
    updatedAt: '2024-10-03T09:30:17Z',
  },
  {
    title: 'Login Page Vulnerability to SQL Injection',
    description:
      'A security audit has revealed that our login page is vulnerable to SQL injection attacks. This poses a significant risk to user data and system integrity. We need to immediately implement input sanitization, use prepared statements for all database queries, and conduct a thorough security review of all entry points in our application.',
    status: 'IN_PROGRESS',
    createdAt: '2024-10-03T07:55:19Z',
    updatedAt: '2024-10-03T08:10:41Z',
  },
  {
    title: 'Slow Loading Times for Product Images',
    description:
      'Customers are complaining about slow loading times for product images on our e-commerce site, particularly on mobile devices. This is negatively impacting user experience and potentially affecting sales. We need to optimize image compression, implement lazy loading, and consider using a content delivery network (CDN) to improve load times across different geographical locations.',
    status: 'OPEN',
    createdAt: '2024-10-02T13:25:50Z',
    updatedAt: '2024-10-03T11:05:33Z',
  },
  {
    title: 'Inconsistent Search Results Across Platforms',
    description:
      'Users have reported that search results are inconsistent between our web and mobile applications. This discrepancy is causing confusion and frustrating users who expect a seamless experience across platforms. We need to audit our search algorithms, ensure data consistency across our backend services, and potentially refactor our search implementation to use a unified API for all platforms.',
    status: 'IN_PROGRESS',
    createdAt: '2024-10-01T09:40:12Z',
    updatedAt: '2024-10-03T14:20:55Z',
  },
  {
    title: 'Email Notification System Failure',
    description:
      'Our automated email notification system has stopped sending out important alerts to users, including password reset requests and account verification emails. This is severely impacting user onboarding and account management. We need to investigate the email service integration, check for any API changes or service outages, and implement a backup notification system to prevent future failures.',
    status: 'IN_PROGRESS',
    createdAt: '2024-10-03T06:15:29Z',
    updatedAt: '2024-10-03T07:30:18Z',
  },
  {
    title: 'Inaccurate Inventory Tracking in Warehouse Module',
    description:
      'The inventory tracking system in our warehouse management module is showing discrepancies between recorded and actual stock levels. This is leading to overselling of some products and unnecessary restocking of others. We need to audit the inventory calculation logic, implement real-time updates, and potentially introduce regular physical inventory checks to reconcile differences.',
    status: 'OPEN',
    createdAt: '2024-09-29T15:50:37Z',
    updatedAt: '2024-10-03T11:25:49Z',
  },
  {
    title: 'User Profile Pictures Not Uploading',
    description:
      'Users are unable to upload or change their profile pictures across all platforms. The upload process seems to initiate but never completes, leaving users with the default avatar. We need to check our file upload service, verify storage permissions, and ensure that our image processing pipeline is functioning correctly.',
    status: 'IN_PROGRESS',
    createdAt: '2024-10-02T10:05:44Z',
    updatedAt: '2024-10-03T13:40:22Z',
  },
  {
    title: 'Incorrect Currency Conversion in International Transactions',
    description:
      'Our payment processing system is applying incorrect currency conversion rates for international transactions. This is resulting in overcharging or undercharging customers, depending on their location. We need to review our currency conversion API integration, implement real-time rate fetching, and add safeguards to prevent transactions with outdated rates.',
    status: 'OPEN',
    createdAt: '2024-10-03T08:30:15Z',
    updatedAt: '2024-10-03T09:45:37Z',
  },
  {
    title: 'Dashboard Analytics Showing Inconsistent Data',
    description:
      'The analytics dashboard for our SaaS product is displaying inconsistent data when compared to raw database queries. This is causing confusion among our internal teams and potentially misleading decision-making. We need to audit our data aggregation pipelines, verify the accuracy of our analytics queries, and implement data integrity checks throughout the reporting process.',
    status: 'OPEN',
    createdAt: '2024-10-01T14:20:33Z',
    updatedAt: '2024-10-03T16:10:59Z',
  },
  {
    title: 'API Rate Limiting Not Enforced',
    description:
      'Our public API is not correctly enforcing rate limits, allowing some users to make an excessive number of requests. This is putting unnecessary strain on our servers and potentially enabling abuse of our service. We need to implement proper rate limiting middleware, set up monitoring for high-volume API users, and update our documentation to clearly communicate rate limit policies.',
    status: 'IN_PROGRESS',
    createdAt: '2024-10-02T11:55:28Z',
    updatedAt: '2024-10-03T13:05:41Z',
  },
  {
    title: 'Broken Social Media Integration',
    description:
      'The social media sharing functionality on our platform is not working correctly. Users are unable to share content directly to their social media accounts, which is impacting our viral growth strategy. We need to review our social media API integrations, update any deprecated methods, and implement better error handling to provide users with meaningful feedback when sharing fails.',
    status: 'IN_PROGRESS',
    createdAt: '2024-09-30T09:10:52Z',
    updatedAt: '2024-10-03T11:30:18Z',
  },
  {
    title: 'Memory Leak in Background Worker Processes',
    description:
      'Our backend worker processes responsible for handling asynchronous tasks are experiencing memory leaks. This is causing increased server resource usage and occasional crashes during peak load times. We need to profile the worker code, identify the source of the memory leaks, and implement proper resource cleanup and management.',
    status: 'OPEN',
    createdAt: '2024-10-03T07:40:09Z',
    updatedAt: '2024-10-03T10:55:33Z',
  },
  {
    title: 'Inconsistent Fonts Across Website',
    description:
      'Users have reported that fonts appear inconsistent across different pages of our website, particularly on certain browsers. This inconsistency is harming our brand image and user experience. We need to audit our CSS, ensure proper font loading across all browsers, and implement a cohesive typography system throughout the site.',
    status: 'CLOSED',
    createdAt: '2024-10-02T15:35:47Z',
    updatedAt: '2024-10-03T09:20:11Z',
  },
  {
    title: 'Failing To Generate PDF Reports',
    description:
      'The automated PDF report generation feature for monthly user statistics is failing to produce reports. This is affecting our enterprise customers who rely on these reports for their own analytics. We need to investigate the PDF generation library, ensure compatibility with our current data formats, and implement better error logging to identify the root cause of the failures.',
    status: 'IN_PROGRESS',
    createdAt: '2024-10-01T12:05:39Z',
    updatedAt: '2024-10-03T14:50:27Z',
  },
  {
    title: 'Incorrect Timezone Handling in Scheduling Module',
    description:
      "The scheduling module in our project management tool is not correctly handling different timezones, causing confusion and missed deadlines for distributed teams. We need to review our timezone conversion logic, ensure we're using the latest timezone database, and provide clearer timezone information in the user interface.",
    status: 'IN_PROGRESS',
    createdAt: '2024-09-29T16:30:22Z',
    updatedAt: '2024-10-03T11:15:48Z',
  },
  {
    title: 'Unexpected Logout on Mobile App',
    description:
      "Users of our mobile app are reporting unexpected logouts, particularly when the app is in the background for extended periods. This is frustrating users who expect to remain logged in. We need to investigate our token refresh mechanism, review the app's background behavior, and potentially implement a more robust session management system.",
    status: 'OPEN',
    createdAt: '2024-10-02T08:50:14Z',
    updatedAt: '2024-10-03T13:25:39Z',
  },
  {
    title: 'Broken Links in Knowledge Base Articles',
    description:
      "Several broken links have been identified in our customer-facing knowledge base articles. This is hindering customers' ability to find the information they need and increasing support ticket volume. We need to implement a link checker tool, update or remove broken links, and establish a regular audit process to maintain the integrity of our documentation.",
    status: 'CLOSED',
    createdAt: '2024-10-03T10:45:31Z',
    updatedAt: '2024-10-03T15:20:55Z',
  },
];
