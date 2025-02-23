/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type AdminUsersSessionListResponse = WebAPICallResult & {
  active_sessions?:   ActiveSession[];
  error?:             string;
  needed?:            string;
  ok?:                boolean;
  provided?:          string;
  response_metadata?: ResponseMetadata;
};

export interface ActiveSession {
  created?:    Created;
  recent?:     Created;
  session_id?: number;
  team_id?:    string;
  user_id?:    string;
}

export interface Created {
  device_hardware?:      string;
  ip?:                   string;
  os?:                   string;
  os_version?:           string;
  slack_client_version?: string;
}

export interface ResponseMetadata {
  next_cursor?: string;
}
