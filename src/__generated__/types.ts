/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Metadata {
  /**
   * current page of request
   * @example 0
   */
  page: number
  /**
   * limit resources per page of request
   * @example 10
   */
  limit: number
  /**
   * number of resources
   * @example 12
   */
  totalRecords: number
  /**
   * number of pages
   * @example 112
   */
  totalPages: number
}

export type ObjectId = object

export interface UserDto {
  id: string
  name: string
  userName: string
  email: string
  type: string
  loginPlatform: string
  contactEmail: string
  _id: ObjectId
  isVisibleName: boolean
  aka?: string
  gender?: string
  isVisibleGender: boolean
  image?: string
  role: string
  userPlatformId?: string
  country?: string
  isVisibleCountry: boolean
  countryCode?: string
  phoneNumber?: string
  address?: string
  introduction?: string
  fields: string[]
  /** @format date-time */
  debutDate?: string
  isVisibleEmail: boolean
  link?: string
  video?: string
  /** @format date-time */
  dateOfBirth?: string
  isVisibleDateOfBirth: boolean
  showedBadges: ObjectId[]
  profileImages: string[]
  /** @format date-time */
  deletedAt?: string
  isVerified: boolean
  isActive: boolean
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
}

export interface UserListResponseDto {
  metadata: Metadata
  data: UserDto[]
}

export interface AdminEditUserRequestDto {
  isSpecial: boolean
}

export interface UserInfoDto {
  id: string
  name: string
  userName: string
  email: string
  type: string
  loginPlatform: string
  contactEmail: string
  _id: ObjectId
  isVisibleName: boolean
  aka?: string
  gender?: string
  isVisibleGender: boolean
  image?: string
  role: string
  userPlatformId?: string
  country?: string
  isVisibleCountry: boolean
  countryCode?: string
  phoneNumber?: string
  address?: string
  introduction?: string
  fields: string[]
  /** @format date-time */
  debutDate?: string
  isVisibleEmail: boolean
  link?: string
  video?: string
  /** @format date-time */
  dateOfBirth?: string
  isVisibleDateOfBirth: boolean
  showedBadges: ObjectId[]
  profileImages: string[]
  /** @format date-time */
  deletedAt?: string
  isVerified: boolean
  isActive: boolean
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
}

export interface AdminSignInRequestBodyDto {
  userName: string
  password: string
}

export interface AdminSignInResponseDto {
  accessToken: string
  refreshToken: string
}

export interface AdminRefreshRequestBodyDto {
  refreshToken: string
}

export interface AdminEditCrewRequestDto {
  isOfficial?: boolean
}

export interface CrewProfileActivity {
  id: string
  description: string
  title?: string
  /** @format date-time */
  startDate?: string
  /** @format date-time */
  endDate?: string
  dateRangeType?: 'Year' | 'Month'
  /** @format date-time */
  specificDate?: string
  /** @format date-time */
  createdAt: string
}

export interface UserGetCrewDetailResponseDto {
  id: string
  isLeader: boolean
  leaderId: string
  leaderName: string
  leaderImage: string
  name: string
  image?: string
  link?: string
  country?: string
  badgeEditable: boolean
  fields?: string[]
  /** @format date-time */
  foundationDate: string
  activities: CrewProfileActivity[]
  view: 'CrewLeader' | 'Invited' | 'NotMember' | 'Member'
  invitationId?: string
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
}

export interface Crew {
  id: string
  isLeader: boolean
  leaderId: string
  leaderName: string
  leaderImage: string
  name: string
  image?: string
  link?: string
  country?: string
  badgeEditable: boolean
  fields?: string[]
  /** @format date-time */
  foundationDate: string
  activities: CrewProfileActivity[]
  view: 'CrewLeader' | 'Invited' | 'NotMember' | 'Member'
  invitationId?: string
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
}

export interface CrewListResponseDto {
  metadata: Metadata
  data: Crew[]
}

export interface RedirectSignInSocialsBodyDto {
  code: string
  id_token?: string
}

export interface UserRefreshRequestBodyDto {
  refreshToken: string
}

export interface UserSignInResponseDto {
  accessToken: string
  refreshToken: string
}

export interface GetProfileResponseDto {
  id: string
  name: string
  picture?: string
  countryCode?: string
  phoneNumber?: string
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
  isActive: object
}

export interface UpdateProfileRequestBodyDto {
  phoneNumber: string
  countryCode: string
}

export interface UpdatePasswordRequestBodyDto {
  oldPassword: string
  newPassword: string
}

export interface Badge {
  id: string
  name?: string
  image: string
  type: 'Welcome' | 'Dancer' | 'Joined' | 'Reward'
}

export interface ProfileActivity {
  id: string
  description: string
  title?: string
  /** @format date-time */
  startDate?: string
  /** @format date-time */
  endDate?: string
  dateRangeType?: 'Year' | 'Month'
  /** @format date-time */
  specificDate?: string
  /** @format date-time */
  createdAt: string
}

export interface UserProfileResponseDto {
  id: string
  name: string
  isVisibleName: boolean
  aka?: string
  gender?: 'Male' | 'Female' | 'Other'
  isVisibleGender: boolean
  image?: string
  type: 'Default' | 'Dancer' | 'Mc' | 'Dj'
  role: 'Default' | 'Dancer' | 'DancerCrewLeader' | 'CrewLeader'
  country?: string
  isVisibleCountry: boolean
  countryCode?: string
  phoneNumber?: string
  address?: string
  introduction?: string
  fields: string[]
  /** @format date-time */
  debutDate?: string
  email?: string
  contactEmail?: string
  isVisibleEmail: boolean
  link?: string
  video?: string
  /** @format date-time */
  dateOfBirth?: string
  isVisibleDateOfBirth: boolean
  showedBadges: Badge[]
  profileImages: string[]
  isVerified: boolean
  isActive: boolean
  activities: ProfileActivity[]
}

export interface EventPreview {
  id: string
  image: string
  name: string
  registerStatus:
    | 'WaitingToApprove'
    | 'Denied'
    | 'Approved'
    | 'ManualApproved'
    | 'QrAttended'
    | 'ManualAttended'
    | 'WaitingToCancel'
    | 'CancelConfirmed'
  isDrafting: boolean
}

export interface UserEventsPreviewListResponseDto {
  metadata: Metadata
  data: EventPreview[]
}

export interface UserEvent {
  id: string
  leaderId: string
  type: 'Watching' | 'Joining'
  image: string
  name: string
  introduction: string
  /** @format date-time */
  startDate: string
  /** @format date-time */
  endDate: string
  /** @format date-time */
  registerDate: string
  capacity: number
  location: string
  locationDescription?: string
  fields: string[]
  eventRule: string
  roundIntroduction: string
  host?: string
  judge?: string
  dj?: string
  mc?: string
  description: string
  joinedBadgeImage: string
  link?: string
  contact: string
  price: number
  bankName?: string
  accountName?: string
  accountNumber?: string
  /** @format date-time */
  createdAt: string
}

export interface UserEventsListResponseDto {
  metadata: Metadata
  data: UserEvent[]
}

export interface BadgeDto {
  id: string
  name?: string
  image: string
  type: 'Welcome' | 'Dancer' | 'Joined' | 'Reward'
}

export interface UserBadgeListResponseDto {
  metadata: Metadata
  data: BadgeDto[]
}

export interface UserCrewsListResponseDto {
  metadata: Metadata
  data: Crew[]
}

export interface Invitation {
  id: string
  crewId: string
  crewName: string
  crewImage: string
  status: 'Pending' | 'Accepted' | 'Rejected'
}

export interface UserInvitationListResponseDto {
  metadata: Metadata
  data: Invitation[]
}

export interface UserChangeInvitationStatusRequestDto {
  status: 'Accepted' | 'Rejected'
}

export interface CreateProfileActivity {
  id?: string
  description: string
  title?: string
  /** @format date-time */
  startDate?: string
  /** @format date-time */
  endDate?: string
  /** @format date-time */
  specificDate?: string
  dateRangeType?: 'Year' | 'Month'
}

export interface UserEditProfileActivityRequestDto {
  contactEmail?: string
  isVisibleEmail: boolean
  name: string
  isVisibleName: boolean
  aka: string
  country: string
  isVisibleCountry: boolean
  gender: 'Male' | 'Female' | 'Other'
  isVisibleGender: boolean
  /** @format date-time */
  dateOfBirth: string
  isVisibleDateOfBirth: boolean
  type: 'Default' | 'Dancer' | 'Mc' | 'Dj'
  introduction: string
  fields: string[]
  /** @format date-time */
  debutDate: string
  link: string
  video: string
  activities?: CreateProfileActivity[]
}

export interface UserEditProfileIdCardRequestDto {
  showedBadges: string[]
  profileImages: string[]
  image: string
}

export interface Activity {
  title: string
  /** @format date-time */
  specificDate?: string
  /** @format date-time */
  startDate?: string
  /** @format date-time */
  endDate?: string
  dateRangeType?: 'Year' | 'Month'
  description?: string
}

export interface RegisterDancerRequestBodyDto {
  profileImages: string[]
  image: string
  contactEmail?: string
  aka: string
  type: 'Dancer' | 'Dj' | 'Mc'
  introduction: string
  /** @default [] */
  activities?: Activity[]
}

export interface UserTag {
  id: string
  name: string
  image: string
}

export interface EventMoreInformation {
  title: string
  description: string
}

export interface UserGetEventDetailResponseDto {
  id: string
  leaderId: string
  type: 'Watching' | 'Joining'
  image: string
  isDrafting: boolean
  name: string
  introduction: string
  /** @format date-time */
  startDate: string
  /** @format date-time */
  endDate: string
  dateEditable: boolean
  minCapacityEditable: number
  badgeEditable: boolean
  priceEditable: boolean
  typeEditable: boolean
  /** @format date-time */
  registerDate: string
  capacity: number
  location: string
  locationDescription?: string
  fields: string[]
  eventRule: string
  roundIntroduction: string
  host?: string
  judge?: UserTag[]
  dj?: UserTag[]
  mc?: UserTag[]
  description: string
  joinedBadgeImage: string
  link?: string
  contact: string
  price: number
  bankName?: string
  accountName?: string
  accountNumber?: string
  moreInformation: EventMoreInformation[]
  view:
    | 'CrewLeader'
    | 'NotRegistered'
    | 'WaitingToApprove'
    | 'DeniedByCrewLeader'
    | 'UserCancelled'
    | 'UserCancellationConfirmed'
    | 'Approved'
    | 'EventExpired'
    | 'Attended'
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
}

export interface EventMoreInformationDto {
  title: string
  description: string
}

export interface CreateEventRequestBodyDto {
  /**
   * @default []
   * @example ["65bcb2065ea1296fa8be08e5","something"]
   */
  judge?: string[]
  /**
   * @default []
   * @example ["65bcb2065ea1296fa8be08e5","somebody"]
   */
  dj?: string[]
  /**
   * @default []
   * @example ["65bcb2065ea1296fa8be08e5","someone"]
   */
  mc?: string[]
  isDrafting: boolean
  type: 'Watching' | 'Joining'
  image: string
  name: string
  introduction: string
  /** @format date-time */
  startDate: string
  /** @format date-time */
  endDate: string
  /** @format date-time */
  registerDate: string
  capacity: number
  location: string
  locationDescription: string
  fields: string[]
  eventRule: string
  roundIntroduction: string
  host?: string
  description: string
  joinedBadgeImage: string
  link?: string
  contact: string
  price: number
  bankName?: string
  accountName?: string
  accountNumber?: string
  moreInformation: EventMoreInformationDto[]
}

export interface UserEditEventRequestDto {
  /**
   * @default []
   * @example ["65bcb2065ea1296fa8be08e5","something"]
   */
  judge?: string[]
  /**
   * @default []
   * @example ["65bcb2065ea1296fa8be08e5","somebody"]
   */
  dj?: string[]
  /**
   * @default []
   * @example ["65bcb2065ea1296fa8be08e5","someone"]
   */
  mc?: string[]
  isDrafting: boolean
  type: 'Watching' | 'Joining'
  image: string
  name: string
  introduction: string
  /** @format date-time */
  startDate: string
  /** @format date-time */
  endDate: string
  /** @format date-time */
  registerDate: string
  capacity: number
  location: string
  locationDescription: string
  fields: string[]
  eventRule: string
  roundIntroduction: string
  host?: string
  description: string
  joinedBadgeImage: string
  link?: string
  contact: string
  price: number
  bankName?: string
  accountName?: string
  accountNumber?: string
  moreInformation: EventMoreInformationDto[]
}

export interface UserGetEventCanRegisterStatusResponse {
  canRegisterEvent: boolean
  message: string
}

export interface UserGetEventRegistrationResponseDto {
  id: string
  name: string
  aka: string
  countryCode: string
  phoneNumber: string
  registerStatus:
    | 'WaitingToApprove'
    | 'Denied'
    | 'Approved'
    | 'ManualApproved'
    | 'QrAttended'
    | 'ManualAttended'
    | 'WaitingToCancel'
    | 'CancelConfirmed'
  bankName: string
  senderName: string
  note: string
  cancelBankName?: string
  cancelAccountNumber?: string
  cancelAccountName?: string
  createdAt: string
  updatedAt: string
  /** @format date-time */
  approvedAt?: string
  /** @format date-time */
  deniedAt?: string
  /** @format date-time */
  manualAddedAt?: string
  /** @format date-time */
  manualAttendedAt?: string
  /** @format date-time */
  qrAttendedAt?: string
  cancelIsPaid?: boolean
  /** @format date-time */
  cancelledAt?: string
  /** @format date-time */
  cancelConfirmedAt?: string
}

export interface UserRegisterEventRequestDto {
  bankName?: string
  senderName?: string
  note?: string
}

export interface UserEditEventMemberRegistrationStatusRequestDto {
  registerStatus:
    | 'Approved'
    | 'Denied'
    | 'ManualAttended'
    | 'WaitingToCancel'
    | 'CancelConfirmed'
  cancelBankName?: string
  cancelAccountNumber?: string
  cancelAccountName?: string
}

export interface EventMember {
  id: string
  username: string
  aka: string
  countryCode: string
  phoneNumber: string
  registerStatus:
    | 'WaitingToApprove'
    | 'Denied'
    | 'Approved'
    | 'ManualApproved'
    | 'QrAttended'
    | 'ManualAttended'
    | 'WaitingToCancel'
    | 'CancelConfirmed'
  /** @format date-time */
  deniedAt?: string
  /** @format date-time */
  approvedAt?: string
  /** @format date-time */
  manualAddedAt?: string
  /** @format date-time */
  manualAttendedAt?: string
  /** @format date-time */
  qrAttendedAt?: string
  /** @format date-time */
  cancelledAt?: string
  /** @format date-time */
  cancelConfirmedAt?: string
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
}

export interface UserGetEventMembersResponseDto {
  metadata: Metadata
  data: EventMember[]
}

export interface UserAddEventMemberRequestDto {
  userId: string
  note: string
}

export interface CreateEventRewardRequestDto {
  name: string
  image: string
  /** @default [] */
  members?: string[]
}

export interface EditEventRewardRequestDto {
  name: string
  image: string
  /** @default [] */
  members?: string[]
}

export interface CreateCrewActivity {
  title: string
  /** @format date-time */
  specificDate?: string
  /** @format date-time */
  startDate?: string
  /** @format date-time */
  endDate?: string
  dateRangeType?: 'Year' | 'Month'
  description?: string
}

export interface UserCreateCrewRequestBodyDto {
  image: string
  name: string
  country: string
  fields: string[]
  link?: string
  /** @format date-time */
  foundationDate?: string
  activities?: CreateCrewActivity[]
}

export interface EditCrewActivity {
  id?: string
  title: string
  /** @format date-time */
  specificDate?: string
  /** @format date-time */
  startDate?: string
  /** @format date-time */
  endDate?: string
  dateRangeType?: 'Year' | 'Month'
  description?: string
}

export interface UserEditCrewRequestDto {
  image?: string
  name?: string
  country?: string
  fields?: string[]
  link?: string
  members?: string[]
  /** @format date-time */
  foundationDate?: string
  /** @default [] */
  activities?: EditCrewActivity[]
}

export interface UserGetCrewMembers {
  id: string
  name: string
  image?: string
}

export interface UserGetCrewMembersResponseDto {
  total: number
  data: UserGetCrewMembers[]
}

export interface UserCheckInQrAttendRequestDto {
  viewerId: string
  eventId: string
  /** @format date-time */
  scanAt: string
}

export interface UserCreateCrewInvitationsRequestDto {
  membersId: string[]
}

export interface PublicShowedBadge {
  name: string
  image: string
  type: 'Welcome' | 'Dancer' | 'Joined' | 'Reward'
}

export interface User {
  id: string
  image?: string
  name: string
  type: 'Default' | 'Dancer' | 'DancerCrewLeader' | 'CrewLeader'
  /** @default [] */
  showedBadges: PublicShowedBadge[]
  introduction?: string
}

export interface GetUsersListResponseDto {
  metadata: Metadata
  data: User[]
}

export interface PublicProfileActivity {
  id: string
  description: string
  title?: string
  /** @format date-time */
  startDate?: string
  /** @format date-time */
  endDate?: string
  dateRangeType?: 'Year' | 'Month'
  /** @format date-time */
  specificDate?: string
  /** @format date-time */
  createdAt: string
}

export interface PublicUserProfileResponseDto {
  id: string
  name: string
  isVisibleName: boolean
  aka?: string
  gender?: 'Male' | 'Female' | 'Other'
  isVisibleGender: boolean
  image?: string
  type: 'Default' | 'Dancer' | 'Mc' | 'Dj'
  role: 'Default' | 'Dancer' | 'DancerCrewLeader' | 'CrewLeader'
  country?: string
  isVisibleCountry: boolean
  countryCode?: string
  phoneNumber?: string
  address?: string
  introduction?: string
  fields: string[]
  /** @format date-time */
  debutDate?: string
  email?: string
  contactEmail?: string
  isVisibleEmail: boolean
  link?: string
  video?: string
  /** @format date-time */
  dateOfBirth?: string
  isVisibleDateOfBirth: boolean
  showedBadges: Badge[]
  profileImages: string[]
  isVerified: boolean
  isActive: boolean
  activities: PublicProfileActivity[]
}

export interface CheckRegisteredPhoneNumberRequestDto {
  countryCode: string
  phoneNumber: string
}

export interface PublicEvent {
  id: string
  name: string
  image: string
  location: string
  /** @format date-time */
  registerDate: string
  /** @format date-time */
  startDate: string
  /** @format date-time */
  endDate: string
  type: 'Watching' | 'Joining'
  fields: string[]
}

export interface PublicGetEventsListResponseDto {
  metadata: Metadata
  data: PublicEvent[]
}

export interface PublicGetEventDetail {
  id: string
  leaderId: string
  type: 'Watching' | 'Joining'
  image: string
  name: string
  introduction: string
  /** @format date-time */
  startDate: string
  /** @format date-time */
  endDate: string
  /** @format date-time */
  registerDate: string
  capacity: number
  location: string
  locationDescription?: string
  fields: string[]
  eventRule: string
  roundIntroduction: string
  host?: string
  judge?: UserTag[]
  dj?: UserTag[]
  mc?: UserTag[]
  description: string
  joinedBadgeImage: string
  link?: string
  contact: string
  price: number
  bankName?: string
  accountName?: string
  accountNumber?: string
  view:
    | 'CrewLeader'
    | 'NotRegistered'
    | 'WaitingToApprove'
    | 'DeniedByCrewLeader'
    | 'UserCancelled'
    | 'UserCancellationConfirmed'
    | 'Approved'
    | 'EventExpired'
    | 'Attended'
  /** @format date-time */
  createdAt: string
}

export interface PublicCrew {
  id: string
  image: string
  name: string
  country: string
  leaderName: string
  /** @format date-time */
  foundationDate?: string
  link?: string
  fields?: string[]
}

export interface PublicGetCrewsListResponseDto {
  metadata: Metadata
  data: PublicCrew[]
}

export interface PublicGetCrewDetailResponse {
  id: string
  leaderId: string
  leaderName: string
  leaderImage: string
  image: string
  name: string
  country: string
  fields?: string[]
  link?: string
  members?: string[]
  /** @format date-time */
  foundationDate?: string
  activities: CrewProfileActivity[]
  /** @format date-time */
  createdAt: string
}

export interface PublicGetCrewMembers {
  id: string
  name: string
  image?: string
}

export interface PublicGetCrewMembersResponseDto {
  total: number
  data: PublicGetCrewMembers[]
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = ''
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private abortControllers = new Map<CancelToken, AbortController>()
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams)

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(
      typeof value === 'number' ? value : `${value}`
    )}`
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key]
    )
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string'
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`
        )
        return formData
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input)
  }

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
    }
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]
    const responseFormat = format || requestParams.format

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${
        queryString ? `?${queryString}` : ''
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {})
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body)
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch((e) => {
              r.error = e
              return r
            })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (!response.ok) throw data
      return data
    })
  }
}

/**
 * @title All Round API
 * @version 1.0
 * @contact
 *
 * All Round API documents
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  files = {
    /**
     * No description
     *
     * @tags Files
     * @name FilesControllerUploadFile
     * @request POST:/files
     * @secure
     */
    filesControllerUploadFile: (
      data: {
        /**
         * file to upload
         * @format binary
         */
        file?: File
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/files`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params
      })
  }
  admins = {
    /**
     * No description
     *
     * @tags Admins
     * @name UsersControllerGetUserList
     * @request GET:/admins/users
     * @secure
     */
    usersControllerGetUserList: (
      query: {
        /**
         * order of page
         * @default 0
         */
        page?: number
        /**
         * number of resources per page
         * @min 1
         * @max 100
         * @default 1
         */
        limit?: number
        searchIn: 'all' | 'aka' | 'country' | 'gender' | 'phone' | 'mail'
        search?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<UserListResponseDto, any>({
        path: `/admins/users`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Admins
     * @name UsersControllerUpdateUser
     * @request PUT:/admins/users/{userId}
     * @secure
     */
    usersControllerUpdateUser: (
      userId: string,
      data: AdminEditUserRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/admins/users/${userId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Admins
     * @name UsersControllerGetUserActivity
     * @request GET:/admins/users/{userId}
     * @secure
     */
    usersControllerGetUserActivity: (
      userId: string,
      params: RequestParams = {}
    ) =>
      this.request<UserInfoDto, any>({
        path: `/admins/users/${userId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Admins
     * @name AuthsControllerSignInWithSocial
     * @request POST:/admins/auths/sign-in
     */
    authsControllerSignInWithSocial: (
      data: AdminSignInRequestBodyDto,
      params: RequestParams = {}
    ) =>
      this.request<AdminSignInResponseDto, any>({
        path: `/admins/auths/sign-in`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Admins
     * @name AuthsControllerUserRefresh
     * @request POST:/admins/auths/refresh
     */
    authsControllerUserRefresh: (
      data: AdminRefreshRequestBodyDto,
      params: RequestParams = {}
    ) =>
      this.request<AdminSignInResponseDto, any>({
        path: `/admins/auths/refresh`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Admins
     * @name AuthsControllerGetProfile
     * @request GET:/admins/auths/me
     * @secure
     */
    authsControllerGetProfile: (params: RequestParams = {}) =>
      this.request<ObjectId, any>({
        path: `/admins/auths/me`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Admins
     * @name CrewsControllerUpdateCrew
     * @request PUT:/admins/crews/{crewId}
     * @secure
     */
    crewsControllerUpdateCrew: (
      crewId: string,
      data: AdminEditCrewRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/admins/crews/${crewId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Admins
     * @name CrewsControllerGetCrewDetail
     * @request GET:/admins/crews/{crewId}
     * @secure
     */
    crewsControllerGetCrewDetail: (
      crewId: string,
      params: RequestParams = {}
    ) =>
      this.request<UserGetCrewDetailResponseDto, any>({
        path: `/admins/crews/${crewId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Admins
     * @name CrewsControllerGetCrewList
     * @request GET:/admins/crews
     * @secure
     */
    crewsControllerGetCrewList: (
      query: {
        /**
         * order of page
         * @default 0
         */
        page?: number
        /**
         * number of resources per page
         * @min 1
         * @max 100
         * @default 1
         */
        limit?: number
        searchIn: 'all' | 'name' | 'leader' | 'country'
        search?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<CrewListResponseDto, any>({
        path: `/admins/crews`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      })
  }
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name AuthsControllerSignInWithSocialsFormPost
     * @request POST:/users/auths/socials
     */
    authsControllerSignInWithSocialsFormPost: (
      query: {
        platform: 'kakao' | 'google' | 'apple'
      },
      data: RedirectSignInSocialsBodyDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/auths/socials`,
        method: 'POST',
        query: query,
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name AuthsControllerSignInWithSocials
     * @request GET:/users/auths/socials
     */
    authsControllerSignInWithSocials: (
      query: {
        platform: 'kakao'
        code: string
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/auths/socials`,
        method: 'GET',
        query: query,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name AuthsControllerUserRefresh
     * @request POST:/users/auths/refresh
     */
    authsControllerUserRefresh: (
      data: UserRefreshRequestBodyDto,
      params: RequestParams = {}
    ) =>
      this.request<UserSignInResponseDto, any>({
        path: `/users/auths/refresh`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name AuthsControllerGetProfile
     * @request GET:/users/auths/me
     * @secure
     */
    authsControllerGetProfile: (params: RequestParams = {}) =>
      this.request<GetProfileResponseDto, any>({
        path: `/users/auths/me`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name AuthsControllerUpdateProfile
     * @request PUT:/users/auths/me
     * @secure
     */
    authsControllerUpdateProfile: (
      data: UpdateProfileRequestBodyDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/auths/me`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name AuthsControllerUpdatePassword
     * @request PUT:/users/auths/passwords
     * @secure
     */
    authsControllerUpdatePassword: (
      data: UpdatePasswordRequestBodyDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/auths/passwords`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ProfilesControllerUserProfile
     * @request GET:/users/profiles
     * @secure
     */
    profilesControllerUserProfile: (params: RequestParams = {}) =>
      this.request<UserProfileResponseDto, any>({
        path: `/users/profiles`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ProfilesControllerDeleteProfile
     * @request DELETE:/users/profiles
     * @secure
     */
    profilesControllerDeleteProfile: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/profiles`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ProfilesControllerEditProfile
     * @request PUT:/users/profiles
     * @secure
     */
    profilesControllerEditProfile: (
      data: UserEditProfileActivityRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/profiles`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ProfilesControllerUserJoinedEventsList
     * @request GET:/users/profiles/joined-events
     * @secure
     */
    profilesControllerUserJoinedEventsList: (
      query?: {
        /**
         * order of page
         * @default 0
         */
        page?: number
        /**
         * number of resources per page
         * @min 1
         * @max 100
         * @default 1
         */
        limit?: number
        status?: 'Waiting' | 'Approved' | 'Attended'
      },
      params: RequestParams = {}
    ) =>
      this.request<UserEventsPreviewListResponseDto, any>({
        path: `/users/profiles/joined-events`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ProfilesControllerUserEventsList
     * @request GET:/users/profiles/my-events
     * @secure
     */
    profilesControllerUserEventsList: (
      query?: {
        /**
         * order of page
         * @default 0
         */
        page?: number
        /**
         * number of resources per page
         * @min 1
         * @max 100
         * @default 1
         */
        limit?: number
        isDrafting?: boolean
      },
      params: RequestParams = {}
    ) =>
      this.request<UserEventsListResponseDto, any>({
        path: `/users/profiles/my-events`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ProfilesControllerUserBadgesList
     * @request GET:/users/profiles/my-badges
     * @secure
     */
    profilesControllerUserBadgesList: (
      query?: {
        /**
         * order of page
         * @default 0
         */
        page?: number
        /**
         * number of resources per page
         * @min 1
         * @max 100
         * @default 1
         */
        limit?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<UserBadgeListResponseDto, any>({
        path: `/users/profiles/my-badges`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ProfilesControllerUserJoinedCrewsList
     * @request GET:/users/profiles/joined-crews
     * @secure
     */
    profilesControllerUserJoinedCrewsList: (
      query?: {
        /**
         * order of page
         * @default 0
         */
        page?: number
        /**
         * number of resources per page
         * @min 1
         * @max 100
         * @default 1
         */
        limit?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<UserCrewsListResponseDto, any>({
        path: `/users/profiles/joined-crews`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ProfilesControllerUserCrewsList
     * @request GET:/users/profiles/my-crews
     * @secure
     */
    profilesControllerUserCrewsList: (
      query?: {
        /**
         * order of page
         * @default 0
         */
        page?: number
        /**
         * number of resources per page
         * @min 1
         * @max 100
         * @default 1
         */
        limit?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<UserCrewsListResponseDto, any>({
        path: `/users/profiles/my-crews`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ProfilesControllerUserInvitationCrewsList
     * @request GET:/users/profiles/invited-crews
     * @secure
     */
    profilesControllerUserInvitationCrewsList: (
      query?: {
        /**
         * order of page
         * @default 0
         */
        page?: number
        /**
         * number of resources per page
         * @min 1
         * @max 100
         * @default 1
         */
        limit?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<UserInvitationListResponseDto, any>({
        path: `/users/profiles/invited-crews`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ProfilesControllerChangeInvitationStatus
     * @request PUT:/users/profiles/invited-crews/{invitationId}
     * @secure
     */
    profilesControllerChangeInvitationStatus: (
      invitationId: string,
      data: UserChangeInvitationStatusRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/profiles/invited-crews/${invitationId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ProfilesControllerEditProfileIdCard
     * @request PUT:/users/profiles/id-card
     * @secure
     */
    profilesControllerEditProfileIdCard: (
      data: UserEditProfileIdCardRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/profiles/id-card`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ProfilesControllerRegisterDancer
     * @request POST:/users/profiles/register-dancer
     * @secure
     */
    profilesControllerRegisterDancer: (
      data: RegisterDancerRequestBodyDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/profiles/register-dancer`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name EventsControllerGetEventsList
     * @request GET:/users/events
     * @secure
     */
    eventsControllerGetEventsList: (
      query?: {
        /**
         * order of page
         * @default 0
         */
        page?: number
        /**
         * number of resources per page
         * @min 1
         * @max 100
         * @default 1
         */
        limit?: number
        type?: 'Watching' | 'Joining'
        /** @default "" */
        search?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<UserEventsListResponseDto, any>({
        path: `/users/events`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name EventsControllerCreateEvent
     * @request POST:/users/events
     * @secure
     */
    eventsControllerCreateEvent: (
      data: CreateEventRequestBodyDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/events`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name EventsControllerGetEvent
     * @request GET:/users/events/{eventId}
     * @secure
     */
    eventsControllerGetEvent: (eventId: string, params: RequestParams = {}) =>
      this.request<UserGetEventDetailResponseDto, any>({
        path: `/users/events/${eventId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name EventsControllerEditEvent
     * @request PUT:/users/events/{eventId}
     * @secure
     */
    eventsControllerEditEvent: (
      eventId: string,
      data: UserEditEventRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/events/${eventId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name EventsControllerDeleteEvent
     * @request DELETE:/users/events/{eventId}
     * @secure
     */
    eventsControllerDeleteEvent: (
      eventId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/events/${eventId}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name EventsControllerCanRegisterEvent
     * @request GET:/users/events/{eventId}/registers/check
     * @secure
     */
    eventsControllerCanRegisterEvent: (
      eventId: string,
      params: RequestParams = {}
    ) =>
      this.request<UserGetEventCanRegisterStatusResponse, any>({
        path: `/users/events/${eventId}/registers/check`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name EventsControllerGetRegistrationDetail
     * @request GET:/users/events/registers/{registerId}
     * @secure
     */
    eventsControllerGetRegistrationDetail: (
      registerId: string,
      params: RequestParams = {}
    ) =>
      this.request<UserGetEventRegistrationResponseDto, any>({
        path: `/users/events/registers/${registerId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name EventsControllerRegisterEvent
     * @request POST:/users/events/{eventId}/registers
     * @secure
     */
    eventsControllerRegisterEvent: (
      eventId: string,
      data: UserRegisterEventRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/events/${eventId}/registers`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name EventsControllerGetUserRegistration
     * @request GET:/users/events/{eventId}/registers
     * @secure
     */
    eventsControllerGetUserRegistration: (
      eventId: string,
      params: RequestParams = {}
    ) =>
      this.request<UserGetEventRegistrationResponseDto, any>({
        path: `/users/events/${eventId}/registers`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name EventsControllerEditEventMemberRegistrationStatus
     * @request PUT:/users/events/{eventId}/registers/{registerId}
     * @secure
     */
    eventsControllerEditEventMemberRegistrationStatus: (
      eventId: string,
      registerId: string,
      data: UserEditEventMemberRegistrationStatusRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/events/${eventId}/registers/${registerId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name EventsControllerGetEventMembers
     * @request GET:/users/events/{eventId}/members
     * @secure
     */
    eventsControllerGetEventMembers: (
      eventId: string,
      query?: {
        /**
         * order of page
         * @default 0
         */
        page?: number
        /**
         * number of resources per page
         * @min 1
         * @max 100
         * @default 1
         */
        limit?: number
        registerStatus?: (
          | 'WaitingToApprove'
          | 'Denied'
          | 'Approved'
          | 'ManualApproved'
          | 'QrAttended'
          | 'ManualAttended'
          | 'WaitingToCancel'
          | 'CancelConfirmed'
        )[]
      },
      params: RequestParams = {}
    ) =>
      this.request<UserGetEventMembersResponseDto, any>({
        path: `/users/events/${eventId}/members`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name EventsControllerAddEventMember
     * @request POST:/users/events/{eventId}/members
     * @secure
     */
    eventsControllerAddEventMember: (
      eventId: string,
      data: UserAddEventMemberRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/events/${eventId}/members`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name EventsControllerCreateEventReward
     * @request POST:/users/events/{eventId}/rewards
     * @secure
     */
    eventsControllerCreateEventReward: (
      eventId: string,
      data: CreateEventRewardRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/events/${eventId}/rewards`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name EventsControllerGetEventReward
     * @request GET:/users/events/{eventId}/rewards
     * @secure
     */
    eventsControllerGetEventReward: (
      eventId: string,
      params: RequestParams = {}
    ) =>
      this.request<object[], any>({
        path: `/users/events/${eventId}/rewards`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name EventsControllerDeleteEventReward
     * @request DELETE:/users/events/rewards/{rewardId}
     * @secure
     */
    eventsControllerDeleteEventReward: (
      rewardId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/events/rewards/${rewardId}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name EventsControllerEditEventReward
     * @request PUT:/users/events/{eventId}/rewards/{rewardId}
     * @secure
     */
    eventsControllerEditEventReward: (
      rewardId: string,
      eventId: string,
      data: EditEventRewardRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/events/${eventId}/rewards/${rewardId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name CrewsControllerGetCrewDetail
     * @request GET:/users/crews/{crewId}
     * @secure
     */
    crewsControllerGetCrewDetail: (
      crewId: string,
      params: RequestParams = {}
    ) =>
      this.request<UserGetCrewDetailResponseDto, any>({
        path: `/users/crews/${crewId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name CrewsControllerDeleteCrew
     * @request DELETE:/users/crews/{crewId}
     * @secure
     */
    crewsControllerDeleteCrew: (crewId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/crews/${crewId}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name CrewsControllerUpdateCrew
     * @request PUT:/users/crews/{crewId}
     * @secure
     */
    crewsControllerUpdateCrew: (
      crewId: string,
      data: UserEditCrewRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/crews/${crewId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name CrewsControllerCreateCrew
     * @request POST:/users/crews
     * @secure
     */
    crewsControllerCreateCrew: (
      data: UserCreateCrewRequestBodyDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/crews`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name CrewsControllerGetCrewMembers
     * @request GET:/users/crews/{crewId}/members
     * @secure
     */
    crewsControllerGetCrewMembers: (
      crewId: string,
      query: {
        type: 'Joined' | 'Invited'
      },
      params: RequestParams = {}
    ) =>
      this.request<UserGetCrewMembersResponseDto, any>({
        path: `/users/crews/${crewId}/members`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name CrewsControllerDeleteCrewMembers
     * @request DELETE:/users/crews/{crewId}/members/{memberId}
     * @secure
     */
    crewsControllerDeleteCrewMembers: (
      crewId: string,
      memberId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/crews/${crewId}/members/${memberId}`,
        method: 'DELETE',
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name CrewsControllerCheckInQrAttend
     * @request POST:/users/crews/check-in
     * @secure
     */
    crewsControllerCheckInQrAttend: (
      data: UserCheckInQrAttendRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/crews/check-in`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Users
     * @name CrewsControllerInviteMembers
     * @request POST:/users/crews/{crewId}/invitation
     * @secure
     */
    crewsControllerInviteMembers: (
      crewId: string,
      data: UserCreateCrewInvitationsRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/crews/${crewId}/invitation`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      })
  }
  publics = {
    /**
     * No description
     *
     * @tags Publics
     * @name UsersControllerGetUsersList
     * @request GET:/publics/users
     */
    usersControllerGetUsersList: (
      query?: {
        /**
         * order of page
         * @default 0
         */
        page?: number
        /**
         * number of resources per page
         * @min 1
         * @max 100
         * @default 1
         */
        limit?: number
        types?: ('Default' | 'Dancer' | 'DancerCrewLeader' | 'CrewLeader')[]
        /** @default "" */
        search?: string
        excludeCrewId?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<GetUsersListResponseDto, any>({
        path: `/publics/users`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Publics
     * @name UsersControllerGetUser
     * @request GET:/publics/users/{userId}
     */
    usersControllerGetUser: (userId: string, params: RequestParams = {}) =>
      this.request<PublicUserProfileResponseDto, any>({
        path: `/publics/users/${userId}`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Publics
     * @name UsersControllerCheckPhoneNumberRegistered
     * @request POST:/publics/users/registered-phone-number
     */
    usersControllerCheckPhoneNumberRegistered: (
      data: CheckRegisteredPhoneNumberRequestDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/publics/users/registered-phone-number`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Publics
     * @name EventsControllerGetEventsList
     * @request GET:/publics/events
     */
    eventsControllerGetEventsList: (
      query?: {
        /**
         * order of page
         * @default 0
         */
        page?: number
        /**
         * number of resources per page
         * @min 1
         * @max 100
         * @default 1
         */
        limit?: number
        /** @default "" */
        search?: string
        type?: 'Watching' | 'Joining'
      },
      params: RequestParams = {}
    ) =>
      this.request<PublicGetEventsListResponseDto, any>({
        path: `/publics/events`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Publics
     * @name EventsControllerGetEvent
     * @request GET:/publics/events/{eventId}
     */
    eventsControllerGetEvent: (eventId: string, params: RequestParams = {}) =>
      this.request<PublicGetEventDetail, any>({
        path: `/publics/events/${eventId}`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Publics
     * @name CrewsControllerGetCrewsList
     * @request GET:/publics/crews
     */
    crewsControllerGetCrewsList: (
      query?: {
        /**
         * order of page
         * @default 0
         */
        page?: number
        /**
         * number of resources per page
         * @min 1
         * @max 100
         * @default 1
         */
        limit?: number
        /** @default "" */
        search?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PublicGetCrewsListResponseDto, any>({
        path: `/publics/crews`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Publics
     * @name CrewsControllerGetCrew
     * @request GET:/publics/crews/{crewId}
     */
    crewsControllerGetCrew: (crewId: string, params: RequestParams = {}) =>
      this.request<PublicGetCrewDetailResponse, any>({
        path: `/publics/crews/${crewId}`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Publics
     * @name CrewsControllerGetCrewMembers
     * @request GET:/publics/crews/{crewId}/members
     */
    crewsControllerGetCrewMembers: (
      crewId: string,
      params: RequestParams = {}
    ) =>
      this.request<PublicGetCrewMembersResponseDto, any>({
        path: `/publics/crews/${crewId}/members`,
        method: 'GET',
        format: 'json',
        ...params
      })
  }
}
