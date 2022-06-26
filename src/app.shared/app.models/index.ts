export enum AttendeeStatus {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
}

export enum Gender {
    MALE = 'Мужчина',
    FEMALE = 'Женщина',
    NOT_SPECIFIED = 'Не указано',
}

export enum InstitutionType {
    KINDERGARTEN = 'Детский сад',
    SCHOOL = 'Школа',
}

export interface Attendee {
    id: string;
    driverLicense: DriverLicense;
    driverLicenseId: string;
    profile: Profile;
    profileId: string;
    user: User;
    userId: string;
    passport: Passport;
    passportId: string;
    photoUrl: string;
    contactPhone: string;
    embedding: number[];
    status: AttendeeStatus;
    students: Student[];
}

export interface BirthCertificate {
    id: string;
    birthRecordNumber: string;
    stateRegistrationPlace: string;
    fatherFirstname: string;
    fatherLastname: string;
    fatherMiddlename: string;
    fatherNationality: string;
    motherFirstname: string;
    motherLastname: string;
    motherMiddlename: string;
    motherNationality: string;
    issuedAt: Date;
    documentId: string;
    signature: boolean;
    firstname: string;
    middlename: string;
    lastname: string;
    birthdate: Date;
    gender: Gender;
    placeOfBirth: string;
    scanLink: string;
}

export interface DriverLicense {
    id: string;
    firstname: string;
    middlename: string;
    lastname: string;
    birthdate: Date;
    issuedBy: string;
    cityIssuedIn: string;
    regionIssuedIn: string;
    signature: boolean;
    categories: string[];
    scanLink: string;
}

export interface Event {
    id: string;
    name: string;
    description: string;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface  Incident {
    id: string;
    security: SecurityProfile;
    securityId: string;
    firstname: string;
    middlename: string;
    lastname: string;
    photoUrl: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Institution {
    id: string;
    type: InstitutionType;
    name: string;
    region: string;
    postalCode: string;
    street: string;
    locality: string;
    building: string;
    contactPhone: string;
    contactEmail: string;
}

export interface ManagerProfile {
    id: string;
    profile: Profile;
    profileId: string;
    user: User;
    userId: string;
    institution: Institution;
    institutionId: string;
    position: string;
    admissedAt: Date;
}

export interface Passport {
    id: string;
    firstname: string;
    middlename: string;
    lastname: string;
    birthdate: Date;
    gender: Gender;
    documentSeries: string;
    documentNumber: string;
    placeOfBirth: string;
    signature: boolean;
    stamp: boolean;
    issuedBy: string;
    issuedAt: Date;
    divisionCode: string;
    scanLink: string;
}

export interface Profile {
    id: string;
    firstname: string;
    middlename: string;
    lastname: string;
    birthdate: Date;
    gender: Gender;
    createdAt: Date;
    updatedAt: Date;
}

export interface SecurityProfile {
    id: string;
    profile: Profile;
    profileId: string;
    user?: User;
    userId?: string;
    institution: Institution;
    institutionId: string;
    admissedAt: Date;
}

export interface Student {
    id: string;
    institution: Institution;
    institutionId: string;
    birthCertificate: BirthCertificate;
    birthCertificateId: string;
    admissedAt: Date;
    studyStartYear: string;
    firstname: string;
    middlename: string;
    lastname: string;
    birthdate: Date;
    gender: Gender;
    createdAt: Date;
    updatedAt: Date;
    attendee: Attendee;
}

export interface Visit {
    id: string;
    security: SecurityProfile;
    securityId: string;
    attendee: Attendee;
    attendeeId: string;
    createdAt: Date;
}

export enum Locale {
    ru_RU = 'ru_RU',
    en_EN = 'en_EN',
}

export enum UserStatus {
    INACTIVE = 'INACTIVE',
    ACTIVE = 'ACTIVE',
    BANNED = 'BANNED',
    DELETED = 'DELETED',
}

export interface User {
    id: string;
    email: string;
    emailUpdatedAt: Date;
    username: string;
    usernameUpdatedAt: Date;
    password: string;
    failedAttempts: number;
    lastAuthAttemptAt: Date;
    passwordUpdatedAt: Date;
    status: UserStatus;
    statusUpdatedAt: Date;
    banReason: string;
    createdAt: Date;
    locale: Locale;
    activationLink: string;
}

export interface CreateAttendeeDto {
    driverLicenseId?: string;
    profileId?: string;
    userId?: string;
    passportId?: string;
    contactPhone: string;
}

export interface UpdateAttendeeDto {
    driverLicenseId?: string;
    profileId?: string;
    userId?: string;
    passportId?: string;
    contactPhone?: string;
}

export interface CreateBirthCertificateDto {
    birthRecordNumber: string;
    stateRegistrationPlace: string;
    fatherFirstname: string;
    fatherLastname: string;
    fatherMiddlename?: string;
    fatherNationality: string;
    motherFirstname: string;
    motherLastname: string;
    motherMiddlename?: string;
    motherNationality: string;
    issuedAt: Date;
    documentId: string;
    signature: boolean;
    firstname: string;
    middlename?: string;
    lastname: string;
    birthdate: Date;
    gender: Gender;
    placeOfBirth: string;
}

export interface UpdateBirthCertificateDto {
    birthRecordNumber?: string;
    stateRegistrationPlace?: string;
    fatherFirstname?: string;
    fatherLastname?: string;
    fatherMiddlename?: string;
    fatherNationality?: string;
    motherFirstname?: string;
    motherLastname?: string;
    motherMiddlename?: string;
    motherNationality?: string;
    issuedAt?: Date;
    documentId?: string;
    signature?: boolean;
    firstname?: string;
    middlename?: string;
    lastname?: string;
    birthdate?: Date;
    gender?: Gender;
    placeOfBirth?: string;
}

export interface CreateEventDto {
    name: string;
    description?: string;
    date: Date;
}

export interface UpdateEventDto {
    name?: string;
    description?: string;
    date?: Date;
}

export interface CreateIncidentDto {
    securityId?: string;
    firstname: string;
    middlename?: string;
    lastname: string;
    description?: string;
}

export interface UpdateIncidentDto {
    securityId?: string;
    firstname?: string;
    middlename?: string;
    lastname?: string;
    description?: string;
}

export interface CreateInstitutionDto {
    type: InstitutionType;
    name: string;
    region: string;
    postalCode?: string;
    street: string;
    locality: string;
    building: string;
    contactPhone?: string;
    contactEmail?: string;
}

export interface UpdateInstitutionDto {
    type?: InstitutionType;
    name?: string;
    region?: string;
    postalCode?: string;
    street?: string;
    locality?: string;
    building?: string;
    contactPhone?: string;
    contactEmail?: string;
}

export interface CreateManagerDto {
    profileId?: string;
    userId?: string;
    institutionId?: string;
    position?: string;
    admissedAt?: Date;
}

export interface UpdateManagerDto {
    profileId?: string;
    userId?: string;
    institutionId?: string;
    position?: string;
    admissedAt?: Date;
}

export interface CreatePassportDto {
    firstname: string;
    middlename?: string;
    lastname: string;
    birthdate: Date;
    gender: Gender;
    documentSeries: string;
    documentNumber: string;
    placeOfBirth: string;
    signature: boolean;
    stamp: boolean;
    issuedBy: string;
    issuedAt: Date;
    divisionCode: string;
}

export interface UpdatePassportDto {
    firstname?: string;
    middlename?: string;
    lastname?: string;
    birthdate?: Date;
    gender?: Gender;
    documentSeries?: string;
    documentNumber?: string;
    placeOfBirth?: string;
    signature?: boolean;
    stamp?: boolean;
    issuedBy?: string;
    issuedAt?: Date;
    divisionCode?: string;
}

export interface CreateProfileDto {
    firstname: string;
    middlename?: string;
    lastname: string;
    birthdate?: Date;
    gender: Gender;
}

export interface UpdateProfileDto {
    firstname?: string;
    middlename?: string;
    lastname?: string;
    birthdate?: Date;
    gender?: Gender;
}

export interface CreateSecurityDto {
    profileId?: string;
    userId?: string;
    institutionId?: string;
    admissedAt: Date;
}

export interface UpdateSecurityDto {
    profileId?: string;
    userId?: string;
    institutionId?: string;
    admissedAt?: Date;
}

export interface CreateStudentDto {
    institutionId?: string;
    birthCertificateId?: string;
    admissedAt: Date;
    studyStartYear: string;
    firstname: string;
    middlename?: string;
    lastname: string;
    birthdate: Date;
    gender: Gender;
}

export interface UpdateStudentDto {
    institutionId?: string;
    birthCertificateId?: string;
    admissedAt?: Date;
    studyStartYear?: string;
    firstname?: string;
    middlename?: string;
    lastname?: string;
    birthdate?: Date;
    gender?: Gender;
}

export interface CreateVisitDto {
    securityId?: string;
    attendeeId?: string;
}

export interface UpdateVisitDto {
    securityId?: string;
    attendeeId?: string;
}

export interface CreateUserDto {
    email: string;
    username: string;
    password: string;
    locale: Locale;
}

export class UpdateUserDto {
    username?: string;
    locale?: Locale;
}

