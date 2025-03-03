
export type QRCodeType = 
  | "url" 
  | "vcard" 
  | "pix" 
  | "email" 
  | "sms" 
  | "wifi" 
  | "bitcoin" 
  | "pdf" 
  | "location" 
  | "music" 
  | "phone" 
  | "app" 
  | "image" 
  | "video" 
  | "store" 
  | "event" 
  | "biolink";

export interface QRCodeData {
  // URL
  url?: string;
  
  // VCard
  firstName?: string;
  lastName?: string;
  organization?: string;
  title?: string;
  phone?: string;
  email?: string;
  website?: string;
  
  // PIX
  pixKey?: string;
  merchantName?: string;
  city?: string;
  amount?: string;
  
  // Email
  emailAddress?: string;
  subject?: string;
  body?: string;
  
  // SMS
  phoneNumber?: string;
  message?: string;
  
  // WiFi
  ssid?: string;
  password?: string;
  encryption?: "WPA" | "WEP" | "nopass";
  
  // Bitcoin
  address?: string;
  
  // Location
  latitude?: string;
  longitude?: string;
  query?: string;
  
  // Event
  eventTitle?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

export interface QRCodeCustomizationOptions {
  fgColor: string;
  bgColor: string;
  includeMargin: boolean;
  size: number;
  level: string;
  imageSource: string;
  cornerType: "square" | "rounded";
  cornerColor: string;
  isGradient: boolean;
  gradientColors?: string[];
}
