import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
    ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/blog/10","/blog/11","/blog/12","/blog/13","/blog/14","/blog/15","/blog/16","/blog/17","/blog/18","/blog/19","/blog/20","/blog/21","/blog/22","/blog/23","/blog/24","/blog/25","/blog/26","/blog/27","/blog/28","/blog/29","/blog/30","/blog/31","/blog/32","/blog/33","/blog/34","/blog/35","/blog/36","/blog/37","/blog/38","/blog/39","/blog/40","/blog/41","/blog/42","/blog/43","/blog/44","/blog/45","/blog/46","/blog/47","/blog/48","/blog/49","/blog/50","/blog/51","/blog/52","/blog/53","/blog/54","/blog/55","/blog/56","/blog/57","/blog/58","/blog/59","/blog/60","/blog/61","/blog/62","/blog/63","/blog/64","/blog/65","/blog/66","/blog/67","/blog/68","/blog/69","/blog/70","/blog/71","/blog/72","/blog/73","/blog/74","/blog/75","/blog/76","/blog/77","/blog/78","/blog/79","/blog/80","/blog/81","/blog/82","/blog/83","/blog/84","/blog/85","/blog/86","/blog/87","/blog/88","/blog/89","/blog/90","/blog/91","/blog/92","/blog/93","/blog/94","/blog/95","/blog/96","/blog/97","/blog/98","/blog/99","/blog/100","/blog/101","/blog/102","/blog/103","/blog/104","/blog/105","/blog/106","/blog/107","/blog/108","/blog/109","/blog/110","/","/api/uploadthing"]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 