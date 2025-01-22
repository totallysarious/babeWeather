import { Account, Client, Databases, ID } from 'react-native-appwrite';
import { router } from 'expo-router';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1', 
    platform: 'com.babeWeather.babeWeather',
    projectId: '6754f00c0013739f2eba',
    databaseId: '6754f238003a2b529c18',
    userCollectionId: '6754f255003c08c9fc4e',
    storageId: '6754f466000b6ec98dd3'
}

// Init your React Native SDK
const client = new Client();
const databases = new Databases(client);

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

    const account = new Account(client);

   export async function createUser(email, password ) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password
        );

        if(!newAccount) throw Error;

        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                userId: newAccount.$id,
                email: email,
            }
        );

        return newUser;

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
    }

    export async function signIn(email, password) {
        try {
          const session = await account.createEmailPasswordSession(email, password);
      
          return session;
        } catch (error) {
          throw new Error(error);
        }
      }
    
    ;