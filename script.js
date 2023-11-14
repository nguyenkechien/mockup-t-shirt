const mockup = new fabric.Canvas("mockup", {
  notAllowedCursor: "not-allowed",
  moveCursor: "not",
});
console.log({ mockup });

fabric.Image.fromURL("./bg.png", function (bgImg) {
  mockup.setDimensions({
    width: bgImg.width * 0.5,
    height: bgImg.height * 0.5,
  });
  bgImg.scale(0.5).set({ flipX: true, selectable: false });
  mockup.add(bgImg);
  fabric.Image.fromURL("./base.png", function (baseImg) {
    baseImg.filters.push(
      new fabric.Image.filters.BlendColor({
        color: "#000",
        mode: "tint",
      })
    );
    baseImg.set({
      flipX: true,
      scaleX: 0.5,
      scaleY: 0.5,
      top: 41,
      left: 59,
      selectable: false,
    });
    mockup.add(baseImg);
    baseImg.applyFilters();

    fabric.Image.fromURL("./blur.png", function (blur) {
      blur.set({
        flipX: true,
        scaleX: 0.5,
        scaleY: 0.5,
        top: 41,
        left: 59,
        selectable: false,
      });
      mockup.add(blur);

      fabric.Image.fromURL("./7.png", function (designImg) {
        designImg.scale(0.04).set({
          top: 200,
          left: 300,
          opacity: 0.8,
          selectable: false
        });
        mockup.add(designImg);
        mockup.renderAll();
      });
    });
  });
});
