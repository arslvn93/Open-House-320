const config = {
  "property": {
    "streetAddress": "10 Morrison St",
    "city": "Toronto",
    "cityStateZip": "Toronto, ON M5V2T8",
    "heroSubtitle": "Prepare to be transformed by this stunning Detached that represents the pinnacle of residential design. With 2 carefully curated bedrooms, 2 luxurious bathrooms, and an expansive 2500 sq ft floor plan, this home is more than just a living space – it's a lifestyle statement. Every inch has been thoughtfully crafted to provide an exceptional living experience that balances aesthetic appeal with practical functionality, creating a harmonious environment that adapts to your most discerning needs.",
    "backgroundImageUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1761250557382-2912-80 John St-01.jpg"
  },
  "realtor": {
    "fullName": "Arslan Ahmed",
    "title": "REALTOR®",
    "phone": "4166554850",
    "email": "arslan@salesgenius.co",
    "photoUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757711141211-Headshot Arslan Andrew.jpg",
    "bio": "Professional real estate agent dedicated to helping you find your perfect home.",
    "social": {
      "facebook": "#",
      "instagram": "#",
      "website": "#"
    }
  },
  "brokerage": {
    "name": "Real Broker Ontario Ltd.",
    "logoUrl": "https://cdn.chime.me/image/fs/cmsbuild/2023817/13/w1200_original_13dc3970-c036-43e0-8228-e0a6fb4270fa.png",
    "address": "130 KING ST W UNIT 1900B"
  },
  "openHouse": {
    "eventDate": "",
    "bundleItems": [
            {
                  "icon": "fas fa-home",
                  "text": "Full Property Listing",
                  "url": "https://www.realtor.ca/real-estate/28293039/142-valley-glen-heights-nw-calgary-valley-ridge"
            },
            {
                  "icon": "fas fa-vr-cardboard",
                  "text": "3D Virtual Tour",
                  "url": "https://my.matterport.com/show/?m=VEMZvn8xinR"
            },
            {
                  "icon": "fas fa-ruler-combined",
                  "text": "Architectural Floor Plan",
                  "url": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1761250499656-2912-80 John St-25.jpg"
            },
            {
                  "icon": "fas fa-video",
                  "text": "Video Tour",
                  "url": "https://www.youtube.com/watch?v=P3YAySxYZpA"
            }
      ]
  },
  "meta": {
    "pageTitlePrefix": "🏡 Arslan Ahmed Open House",
    "navBrandLogoText": "OPEN HOUSE",
    "privacyPolicyLink": "https://docs.google.com/document/d/13ERdZ2TanyfTmhqzC2oWZIdyT7E1kZdlz0b10wYMrNg/edit?tab=t.0"
  },
  "settings": {
    "adminWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouseupdate",
    "visitorWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouse",
    "confettiColors": [
      "#6187a7",
      "#f0e9d6",
      "#ffffff",
      "#83a363",
      "#d9ac68"
    ]
  },
  "modalQuestions": [
    {
      "id": "agent_status",
      "questionText": "Are you currently exploring homes with a real estate agent?",
      "options": [
        { "value": "committed", "text": "Yes, I'm committed to an agent." },
        { "value": "not_committed", "text": "No, I'm not committed to an agent." },
        { "value": "gathering_info", "text": "Just gathering information at this stage." }
      ]
    },
    {
      "id": "interest_level",
      "questionText": "How interested are you in this Detached?",
      "options": [
        { "value": "very_interested", "text": "Very interested, actively looking." },
        { "value": "somewhat_interested", "text": "Somewhat interested, keeping options open." },
        { "value": "just_browsing", "text": "Just browsing for now." }
      ]
    },
    {
      "id": "neighborhood_engagement",
      "questionText": "How do you usually enjoy the neighborhood?",
      "options": [
        { "value": "resident_explorer", "text": "I live here and love exploring locally." },
        { "value": "considering_move", "text": "I'm considering moving to this area." },
        { "value": "just_visiting", "text": "Just visiting for the open house." }
      ]
    },
    {
      "id": "feature_attraction",
      "questionText": "What feature attracted you to this home?",
      "options": [
        { "value": "design_layout", "text": "The design and layout." },
        { "value": "location_neighborhood", "text": "The location and neighborhood." },
        { "value": "home_price", "text": "The price of the home." }
      ]
    }
  ],
  "deploymentInfo": {
    "repoId": "1086081650",
    "repoName": "Open-House-320",
    "repoUrl": "https://github.com/arslvn93/Open-House-320",
    "tag": "Open House 10 Morrison St",
    "netlifyUrl": "https://services.leadconnectorhq.com/hooks/KxSrsX5ZH2ZttFjyt9hW/webhook-trigger/723v7Nh8JC60wCn3aRmV",
    "siteId": "f9301e23-443d-4e45-b293-7c8bf1328242"
  }
};