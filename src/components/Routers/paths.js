import { InventoryPage } from "../../pages/InventoryPage";
import { PlayPage } from "../../pages/PlayPage";

export const PAGE_PLAY = "/play";
export const PAGE_INVENTORY = "/inventory";

export const ROUTERS = [
  { title: "Play", path: PAGE_PLAY, component: PlayPage },
  { title: "Inventory", path: PAGE_INVENTORY, component: InventoryPage },
];
