// ============================================================================
// SOUTH INDIAN WEDDING INVITATION CONFIGURATION
// Edit this file to update all text, dates, photos, venue details, and settings.
// ============================================================================

export interface FamilyBlessing {
  role: string;
  title: string;
  names: string[];
}

export interface WeddingEvent {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  time: string;
  venueName: string;
  address: string;
  description: string;
  iconType: 'haldi' | 'mehendi' | 'muhurtham' | 'reception';
  isMainEvent?: boolean;
  image?: string; // Optional custom photo of the event venue / marriage hall
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  aspect: 'vertical' | 'square' | 'wide';
}

export interface WeddingConfig {
  bride: string;
  groom: string;
  tagline: string;
  invitationMessage: string;
  weddingDateFormatted: string;
  countdownTargetDate: string; // ISO 8601 format: YYYY-MM-DDTHH:mm:ss

  // Hero section images
  divineHeroImage: string;
  couplePortraitImage: string;
  templeVenueImage: string;
  marriageHallImage: string; // Photo of the marriage hall / venue

  // Family blessings
  blessings: FamilyBlessing[];

  // Events list
  events: WeddingEvent[];

  // Main Venue Details
  venue: {
    name: string;
    subTitle: string;
    completeAddress: string;
    cityState: string;
    googleMapsUrl: string;
    image: string;
  };

  // Gallery Photos
  gallery: GalleryPhoto[];

  // Final invitation closing message
  finalMessage: {
    line1: string;
    line2: string;
    closing: string;
  };

  // Background Music
  music: {
    audioUrl: string;
    title: string;
  };

  // RSVP settings
  rsvp: {
    enabled: boolean;
    submissionEndpoint?: string; // Optional custom webhook/API URL
    contactPhone?: string;
  };
}

export const weddingConfig: WeddingConfig = {
  bride: "Sai Priya",
  groom: "Santhosh Sivan",
  tagline: "Celebrate Love!",
  invitationMessage: "Santhosh Sivan & Sai Priya are getting married. Join us for an evening of celebrations, dinner, and dancing.",
  weddingDateFormatted: "21 & 22 NOVEMBER 2026",

  // Set target countdown date (Grand Reception: November 21, 2026 at 06:30 PM)
  countdownTargetDate: "2026-11-21T18:30:00",

  // Images in public/assets folder
  divineHeroImage: "/assets/divine_hand_reach.png",
  couplePortraitImage: "/assets/invitation_card.jpg",
  templeVenueImage: "/assets/temple_gopuram.png",
  marriageHallImage: "/assets/annai_mahal.jpg", // Photo of Annai Mahal Marriage Hall (stored in public/assets/)

  // ==========================================================================
  // FAMILY BLESSINGS & DETAILS (Edit Bride & Groom family details here)
  // ==========================================================================
  blessings: [
    {
      role: "Bride's Parents & Family",
      title: "With the Blessings Of",
      names: [
        "Mr. RAJANGAM",
        "Mrs. NIRMALA"
      ]
    },
    {
      role: "Groom's Parents & Family",
      title: "With the Blessings Of",
      names: [
        "Mr. MOHAN",
        "Mrs. JAYANTHI"
      ]
    },
    {
      role: "Beloved Grandparents & Elders",
      title: "Guided By the Elders",
      names: [
        "With the heartfelt blessings of elders & ancestors"
      ]
    }
  ],

  events: [
    {
      id: "reception",
      title: "GRAND RECEPTION",
      subtitle: "Evening of Celebrations, Dinner & Dancing",
      date: "Saturday, 21st November 2026",
      time: "06:30 PM",
      venueName: "Annai Mahal A/C",
      address: "Thiruverkadu, Chennai 600077",
      description: "Join us for an evening of celebrations, dinner, and dancing.",
      iconType: "reception"
    },
    {
      id: "ceremony",
      title: "WEDDING CEREMONY",
      subtitle: "Auspicious Muhurtham",
      date: "Sunday, 22nd November 2026",
      time: "06:00 AM to 07:30 AM",
      venueName: "Annai Mahal A/C",
      address: "Thiruverkadu, Chennai 600077",
      description: "The sacred marriage ceremony and auspicious Muhurtham amidst Vedic chanting, traditional Nadaswaram, and elder blessings.",
      iconType: "muhurtham",
      isMainEvent: true,
      image: "/assets/annai_mahal.jpg"
    }
  ],

  venue: {
    name: "Annai Mahal A/C",
    subTitle: "Venue for Both Events",
    completeAddress: "No. 102, Sivan Kovil Main Road, Thiruverkadu",
    cityState: "Chennai - 600077, Tamil Nadu",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Annai+Mahal+AC+Thiruverkadu+Chennai+600077",
    image: "/assets/annai_mahal.jpg"
  },

  gallery: [
    {
      id: "moments-card",
      url: "/assets/invitation_card.jpg",
      caption: "Official Wedding Invitation Card",
      aspect: "vertical"
    },
    {
      id: "moments-1",
      url: "/assets/couple_1.png",
      caption: "Sacred bond & joyous moments",
      aspect: "vertical"
    },
    {
      id: "moments-2",
      url: "/assets/couple_2.png",
      caption: "Pre-wedding laughter & bliss",
      aspect: "square"
    },
    {
      id: "moments-3",
      url: "/assets/couple_3.png",
      caption: "Traditional celebrations with loved ones",
      aspect: "wide"
    }
  ],

  finalMessage: {
    line1: "Santhosh Sivan & Sai Priya",
    line2: "Join us for an evening of celebrations, dinner, and dancing. Your presence and blessings will make our special day complete.",
    closing: "See you at the wedding! ❤️"
  },

  music: {
    // Royalty-free traditional Indian wedding instrumental shehnai/flute sound stream
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=indian-instrumental-music-flute-11234.mp3",
    title: "Nadaswaram & Shehnai Melodies"
  },

  rsvp: {
    enabled: false,
    contactPhone: "+91 98765 43210"
  }
};
