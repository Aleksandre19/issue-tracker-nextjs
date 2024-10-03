import prisma from '@/prisma/client';
import { userStatus } from '../utils/userStatus';

// Define a type for the model names and operations
type ModelName = 'issue' | 'issueSession';
type ModelOperation =
  | 'findMany'
  | 'create'
  | 'update'
  | 'delete'
  | 'count'
  | 'findUnique';

const queryModel = async <T>(
  modelName: ModelName,
  operation: ModelOperation,
  params: any = {}
): Promise<T> => {
  // Grab the model from prisma
  const model = prisma[modelName] as any;

  // Check if the model and operation are valid
  if (!model || typeof model[operation] != 'function')
    throw new Error(
      `Invalid model name or operation: ${modelName}.${operation}`
    );

  // Perform the query
  try {
    const result = await model[operation](params);
    return result as T;
  } catch (error) {
    console.error(`Error in ${modelName}.${operation}:`, error);
    throw error;
  }
};

// GET Issues.
export const query = async <T>(
  operation: ModelOperation,
  params: any = {}
): Promise<T> => {
  // Check if the user is authenticated
  const { useSession, session } = await userStatus();

  // Determine the model name based on the useSession flag
  const modelName = useSession ? 'issueSession' : 'issue';
  // Add the `where` parameter if it doesn't exist and operation is not 'create'
  if (modelName === 'issueSession' && operation != 'create')
    if (!params.where)
      params = { ...params, where: { issueUserEmail: session?.user?.email } };
    else
      params = {
        ...params,
        where: { ...params.where, issueUserEmail: session?.user?.email },
      };

  // Call the queryModel function with the appropriate model name and operation
  return queryModel<T>(modelName, operation, params);
};
