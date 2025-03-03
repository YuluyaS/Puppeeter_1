const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input1 = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];

    const expected1 = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const output1 = sorting.sortByName(input1);

    const input2 = ["Гарри Поттер", "Гарри Поттер", "Гарри Поттер"];
    const expected2 = ["Гарри Поттер", "Гарри Поттер", "Гарри Поттер"];
    const output2 = sorting.sortByName(input2);

    expect(output1).toEqual(expected1);
    expect(output2).toEqual(expected2);
  });
});
