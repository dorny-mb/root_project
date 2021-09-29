export type Kind =
  | "maintenance_performed"
  | "dino_location_updated"
  | "dino_fed"
  | "dino_removed"
  | "dino_added";
export type Park = {
  kind: Kind;
  location?: string;
};
