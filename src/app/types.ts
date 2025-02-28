// Define the structure for a thumbnail
export interface Thumbnail {
    url: string;
  }
  
  // Define the structure for the thumbnails object
  export interface Thumbnails {
    medium: Thumbnail;
  }
  
  // Define the structure for the resourceId
  export interface ResourceId {
    videoId: string;
  }
  
  // Define the structure for the snippet object
  export interface Snippet {
    title: string;
    thumbnails: Thumbnails;
    resourceId: ResourceId;
  }
  
  // Define the structure for a single item in the items array
  export interface PlaylistItem {
    id: string;
    snippet: Snippet;
  }
  
  // Define the structure for the API response
  export interface YouTubeApiResponse {
    error: boolean;
    items: PlaylistItem[];
  }