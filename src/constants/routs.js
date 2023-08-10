export const homeRoute = "/start";
export const dmsRoute = "/dms/:dmId";
export const loginRoute = "/login";
export const channelsRoute = "/channels/:channelId";

export function createDmLink(id) {
  let link = "/dms/" + id;
  return link;
}

export function createChannelLink(id) {
  let link = "/channels/" + id;
  return link;
}
