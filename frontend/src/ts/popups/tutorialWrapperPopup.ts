import { isPopupVisible } from "../utils/misc";
import * as Skeleton from "./skeleton";

const wrapperId = "tutorialPopupWrapper";

function show(): void {
  Skeleton.append(wrapperId);

  $("#tutorialPopupWrapper")
    .css("opacity", 0)
    .removeClass("hidden")
    .animate({ opacity: 1 }, 125);
}

function hide(): void {
  $("#tutorialPopupWrapper")
    .css("opacity", 1)
    .animate({ opacity: 0 }, 125, () => {
      $("#tutorialPopupWrapper").addClass("hidden");
      Skeleton.remove(wrapperId);
    });
}

$("#tutorialButton").on("click", () => {
  show();
});

$("#popups").on("click", "#tutorialPopupWrapper", () => {
  hide();
});

$("#popups").on("click", "#tutorialPopupWrapper .button", () => {
  hide();
});

$(document).on("keypress", "#tutorialButton", (e) => {
  if (e.key === "Enter") {
    $(e.currentTarget).trigger("click");
  }
});

$(document).on("keydown", (e) => {
  if (e.key === "Escape" && isPopupVisible(wrapperId)) {
    hide();
  }
});

Skeleton.save(wrapperId);
