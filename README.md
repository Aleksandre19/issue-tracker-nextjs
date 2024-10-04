<h1 align='center'>Issue Trucker</h1>

This is a Full Stack project, built with Next.js. It is a simple issue tracker which implements CRUD operations. For user authentication, it uses NextAuth.js with Google Provider. It has pagination, sorting, and filtering. Users can also change the status of an issue and assign it to another user. The application uses Tailwind CSS and Radix UI for the user interface and MySQL for the database. The project is deployed on Vercel.

[Demo](https://issue-tracker-beta-six.vercel.app)

## Running the Project Locally

Follow these steps to set up and run the project on your local machine:

1. **Clone the repository**

   ```
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Set up environment variables**

   - Create a `.env` file in the root directory
   - Add the following variables (replace with your actual values):
     ```
     DATABASE_URL="mysql://username:password@localhost:3306/your_database_name"
     NEXTAUTH_URL="http://localhost:3000"
     NEXTAUTH_SECRET="your-nextauth-secret"
     GOOGLE_CLIENT_ID="your-google-client-id"
     GOOGLE_CLIENT_SECRET="your-google-client-secret"
     ```

4. **Set up the database**

   ```
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**

   ```
   npm run dev
   ```

6. **Open the application**
   - Navigate to `http://localhost:3000` in your web browser

##### Additional Notes

- Ensure you have Node.js (version 14 or later) and npm installed on your machine.
- For the Google authentication to work, you need to set up a Google Cloud project and obtain the necessary credentials.
- Make sure you have MySQL installed and running on your local machine, or update the `DATABASE_URL` to point to your preferred database.

If you encounter any issues during setup, please check the [Troubleshooting](#troubleshooting) section or open an issue on the GitHub repository.

### Technologies used:

- **[Next.js](https://nextjs.org/)**: React framework for building the full-stack application.
- **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: Typed superset of JavaScript for improved development experience.
- **[Prisma](https://www.prisma.io/)**: Next-generation ORM for Node.js and TypeScript.
- **[NextAuth.js](https://next-auth.js.org/)**: Authentication solution for Next.js applications.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- **[Radix UI](https://www.radix-ui.com/)**: Unstyled, accessible components for building high-quality design systems.
- **[React Query](https://tanstack.com/query/latest)**: Data fetching and state management library for React applications.
- **[Axios](https://axios-http.com/)**: Promise-based HTTP client for making API requests.
- **[React Hook Form](https://react-hook-form.com/)**: Efficient, flexible and extensible forms with easy-to-use validation.
- **[Zod](https://zod.dev/)**: TypeScript-first schema validation with static type inference.
- **[React Hot Toast](https://react-hot-toast.com/)**: Lightweight toast notifications for React.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Popular icon packs as React components.
- **[React Loading Skeleton](https://github.com/dvtng/react-loading-skeleton)**: Create animated loading skeletons for better user experience.
- **[React Markdown](https://github.com/remarkjs/react-markdown)**: Markdown component for React.
- **[React SimpleMDE Editor](https://github.com/RIP21/react-simplemde-editor)**: React component wrapper for SimpleMDE.
- **[Recharts](https://recharts.org/)**: Composable charting library built on React components.
- **[EasyMDE](https://github.com/Ionaru/easy-markdown-editor)**: Easy-to-use Markdown editor.
- **[ESLint](https://eslint.org/)**: Linting utility for JavaScript and TypeScript.
- **[PostCSS](https://postcss.org/)**: Tool for transforming CSS with JavaScript.
