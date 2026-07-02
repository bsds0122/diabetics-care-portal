import { FormType } from "@/types/registration";

export const mapPatientToBackend = (form: FormType) => {
  return {
    first_name: form.firstName,
    last_name: form.lastName,
    sex: form.sex,

    phone_number: form.phone,
    next_of_kin_number: form.nextOfKin,

    date_of_diagnosis: form.diagnosisDate,
    diabetes_type: form.diabeticType,

    region: form.region,
    district: form.district,
    traditional_authority: form.ta,
    village: form.village,

    profile_image: form.profileImage,
  };
};