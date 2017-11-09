# Bookstore Schema

###### General
- name: String

###### PostalAddress:

- addressCountry: String
- addressLocality: String
- addressRegion: String
- postalCode: String
- streetAddress : String

###### ContactPoint:
- Website_url : String

###### Amenities:
- Coffee: Boolean
- SeatingSpace: Int
- Wifi: Boolean
- PowerOutlets: Boolean
- Events: Boolean

###### Internal
- ContactPerson: String
- email: String
- telephone: String

###### Optional
- availableLanguage: Array ( IETF BCP 47 standard )
- hoursAvailable: OpeningHoursSpecification
- Wheelchair Access: Boolean
-	Kids space : Boolean
