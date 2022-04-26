import AFRAME from "aframe";

export default class AFrameService {
  static registerComponents(): void {
    AFRAME.registerComponent("mb-btn-group", {
      schema: {
        position: {
          type: "string",
          default: "0 0 0",
        },
        lookAt: {
          type: "string",
          default: "#camera",
        },
      },
      init: function () {
        this.el.setAttribute("position", this.data.position);
        this.el.setAttribute("look-at", this.data.lookAt);
      },
    });

    AFRAME.registerComponent("mb-btn", {
      schema: {
        name: {
          type: "string",
          default: "",
        },
        position: {
          type: "string",
          default: "0 0 0",
        },
        radius: {
          type: "number",
          default: 0.2,
        },
        color: {
          type: "string",
          default: "#fff",
        },
        opacity: {
          type: "number",
          default: 1,
        },
        class: {
          type: "string",
          default: "link",
        },
        animation: {
          type: "string",
          default: `property: scale; loop: true;
                    from: 1 1 1; to: 1.08 1.08 1.08;
                    dir: alternate; dur: 2000;`,
        },
        animation__fadeOut: {
          type: "string",
          default: `property: scale;
                    from: 1 1 1; to: 0 0 0;
                    dur: 500;`,
        },
        animation__fadeIn: {
          type: "string",
          default: `property: scale;
                    from: 0 0 0; to: 1 1 1;
                    dur: 500;`,
        },
      },
      init: function () {
        if (this.data.animation !== "none") {
          this.el.setAttribute("id", `btn_${this.data.name}`);
          this.el.setAttribute("animation__shining", this.data.animation);
        } else {
          this.el.setAttribute("id", `background_${this.data.name}_btn`);
        }

        this.el.setAttribute("position", this.data.position);
        this.el.setAttribute("radius", this.data.radius);
        this.el.setAttribute("color", this.data.color);
        // this.el.setAttribute('opacity', this.data.opacity);
        this.el.setAttribute("class", this.data.class);

        if (this.data.animation !== "none") {
          this.el.addEventListener("mouseenter", () => {
            document
              .getElementById("cursor")?.setAttribute("material", "color: #dc3545; shader: flat");
          });

          this.el.addEventListener("mouseleave", () => {
            document
              .getElementById("cursor")?.setAttribute("material", "color: #fff; shader: flat");
          });

          this.el.addEventListener("mouseleave", () => {
            setTimeout(() => {
              document
                .getElementById(`background_${this.data.name}_btn`)?.removeAttribute("animation__fadeOut");
              document
                .getElementById(`background_${this.data.name}_btn`)?.setAttribute("animation__fadeIn", this.data.animation__fadeIn);
            }, 500);
          });

          document
            .getElementById(`btn_${this.data.name}`)?.addEventListener("click", () => {
              document
                .getElementById(`label_${this.data.name}`)?.setAttribute("visible", "true");
            });

          document
            .getElementById(`btn_${this.data.name}`)?.addEventListener("mouseleave", () => {
              setTimeout(() => {
                document
                  .getElementById(`label_${this.data.name}`)?.setAttribute("visible", "false");
              }, 3000);
            });
        } else {
          this.el.addEventListener("mouseenter", () => {
            this.el.removeAttribute("animation__fadeIn");
            this.el.setAttribute(
              "animation__fadeOut",
              this.data.animation__fadeOut
            );
          });
        }
      },
    });

    AFRAME.registerComponent("mb-label-group", {
      schema: {
        name: {
          type: "string",
          default: "",
        },
        position: {
          type: "string",
          default: "0 0 0",
        },
        visible: {
          type: "boolean",
          default: false,
        },
      },
      init: function () {
        this.el.setAttribute("id", `label_${this.data.name}`);
        this.el.setAttribute("position", this.data.position);
        this.el.setAttribute("visible", this.data.visible);
      },
    });

    AFRAME.registerComponent("mb-label", {
      schema: {
        value: {
          type: "string",
          default: "",
        },
        lookAt: {
          type: "string",
          default: "#camera",
        },
        position: {
          type: "string",
          default: "0 0 0",
        },
        align: {
          type: "string",
          default: "left",
        },
      },
      init: function () {
        this.el.setAttribute("value", this.data.value);
        this.el.setAttribute("position", this.data.position);
        this.el.setAttribute("look-at", this.data.lookAt);
        this.el.setAttribute("align", this.data.align);
      },
    });
  }

  static destroyComponents(): void {
    delete AFRAME.components['mb-btn-group'];
    delete AFRAME.components['mb-btn'];
    delete AFRAME.components['mb-label-group'];
    delete AFRAME.components['mb-label'];
  }
}
