import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
} from 'react-native-appwrite';

export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.jsm.aora',
  projectId: '6645af78000a2a89575d',
  database: '6645b09f00392ef9a889',
  userCollectionId: '6645b0cc003286bb0370',
  videoCollectionId: '6645b0f0001289cbd082',
  storageId: '6645b25b001308916cb0',
};

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export async function createUser(email, password, username) {
  try {
    const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username,
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
        appwriteConfig.database,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
          accountId: newAccount.$id,
          email: email,
          username: username,
          avatar: avatarUrl,
        },
    );

    return newUser;
  } catch (error) {
    throw new Error(error);
  }
}

export async function signIn(email, password) {
  console.log(email, password);
  try {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getCurrentUser() {
  try {
    const curretnAccount = await account.get();

    if (!curretnAccount) throw Error;

    const currentUser = await databases.listDocuments(
        appwriteConfig.database,
        appwriteConfig.userCollectionId,
        [Query.equal('accountId', curretnAccount.$id)],
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
}
