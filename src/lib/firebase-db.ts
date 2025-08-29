import { collection, addDoc, doc, updateDoc, getDocs, query, orderBy, limit } from 'firebase/firestore'; // Import Firestore functions
import { firestore } from './firebase'; // Import only firestore

// Check if Firebase is initialized
const isFirebaseInitialized = () => {
  return firestore && typeof window !== 'undefined'; // Check only for firestore
};

export interface ApplicationData {
  id?: string; // Make id optional
  fullName: string;
  email: string;
  phone: string;
  program: string;
  qualification?: string;
  timestamp: number;
  status: 'pending' | 'approved' | 'rejected';
}

export interface ContactFormData {
  id?: string; // Add optional id to interface
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  timestamp: number;
  status: 'new' | 'responded';
}

// Save application data to Firebase
export const saveApplication = async (data: Omit<ApplicationData, 'timestamp' | 'status'>): Promise<{ success: boolean; id?: string; error?: string }> => {
  if (!isFirebaseInitialized()) {
    return {
      success: false,
      error: 'Firebase is not initialized. Please check your configuration.'
    };
  }

  try {
    const applicationData: ApplicationData = {
      ...data,
      timestamp: Date.now(),
      status: 'pending'
    };

    // Save to Firestore
    const firestoreApplicationsRef = collection(firestore, 'applications');
    const docRef = await addDoc(firestoreApplicationsRef, applicationData);
    
    return {
      success: true,
      id: docRef.id
    };
  } catch (error) {
    console.error('Error saving application:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

// Save contact form data to Firestore
export const saveContactForm = async (data: Omit<ContactFormData, 'timestamp' | 'status'>): Promise<{ success: boolean; id?: string; error?: string }> => {
  if (!isFirebaseInitialized()) {
    return {
      success: false,
      error: 'Firebase is not initialized. Please check your configuration.'
    };
  }

  try {
    const contactData: ContactFormData = {
      ...data,
      timestamp: Date.now(),
      status: 'new'
    };

    const contactsRef = collection(firestore, 'contacts');
    const docRef = await addDoc(contactsRef, contactData);

    return {
      success: true,
      id: docRef.id
    };
  } catch (error) {
    console.error('Error saving contact form:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

// Fetch all applications from Firestore
export const fetchApplicationsFirestore = async (): Promise<{ success: boolean; data?: ApplicationData[]; error?: string }> => {
  if (!isFirebaseInitialized()) {
    return {
      success: false,
      error: 'Firebase is not initialized. Please check your configuration.'
    };
  }

  try {
    const applicationsCol = collection(firestore, 'applications');
    const applicationsQuery = query(applicationsCol, orderBy('timestamp', 'desc'), limit(100));
    const querySnapshot = await getDocs(applicationsQuery);
    
    const applications: ApplicationData[] = [];
    querySnapshot.forEach((doc) => {
      applications.push({
        id: doc.id,
        ...(doc.data() as Omit<ApplicationData, 'id'>) // Cast doc.data() to Omit<ApplicationData, 'id'>
      });
    });
    
    return {
      success: true,
      data: applications
    };
  } catch (error) {
    console.error('Error fetching applications from Firestore:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

// Update application status in Firestore
export const updateApplicationStatusFirestore = async (id: string, status: 'pending' | 'approved' | 'rejected'): Promise<{ success: boolean; error?: string }> => {
  if (!isFirebaseInitialized()) {
    return {
      success: false,
      error: 'Firebase is not initialized. Please check your configuration.'
    };
  }

  try {
    const applicationRef = doc(firestore, 'applications', id);
    await updateDoc(applicationRef, { status });
    
    return {
      success: true
    };
  } catch (error) {
    console.error('Error updating application status in Firestore:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};
