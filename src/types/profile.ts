export interface DoctorProfile {
  doctor_id: number;
  first_name: string;
  last_name: string;
  phone: string;
  specialization: string;
  hospital: string;
  experience_years: number;
  license_number: string;
  profile_image: string | null;
}

export interface DoctorProfileResponse {
  status_code: number;
  details: string;
  data: DoctorProfile;
}

export interface UpdateProfilePayload {
  first_name: string;
  last_name: string;
  phone: string;
  specialization: string;
  hospital: string;
  experience_years: number;
  license_number: string;
  profile_image?: string | null;
}