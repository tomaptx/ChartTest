export function handleClick(pointData) {
    console.log ("onclick", pointData);
    const newObj = { id: pointData.id, category: pointData.x };
    console.log (newObj);
    FileMaker.PerformScript ("Receive Data", JSON.stringify(newObj));
  }