import { CalculatePoints } from "./CalculatePoints.js";
import { GetMonth } from "./GetMonth.js";

export const DisplayPoints = (inData) => {
  let pointsObject = {};
  inData.forEach((customer) => {
    const pointsEarned = CalculatePoints(customer.amount);

    if (customer.name in pointsObject && pointsEarned > 0) {
      const newPointsObject = { ...pointsObject };
      let pointsPerMonthObject = {
        ...newPointsObject[customer.name].pointsPerMonth,
      };
      if (GetMonth(customer.date) in pointsPerMonthObject) {
        const monthAmount = pointsPerMonthObject[GetMonth(customer.date)];

        pointsPerMonthObject[GetMonth(customer.date)] =
          monthAmount + pointsEarned;
      } else {
        pointsPerMonthObject = {
          ...pointsPerMonthObject,
          [GetMonth(customer.date)]: pointsEarned,
        };
      }
      pointsObject[customer.name] = {
        name: customer.name,
        pointsPerMonth: pointsPerMonthObject,
        total: pointsObject[customer.name].total + pointsEarned,
      };
    } else if (pointsEarned > 0) {
      pointsObject[customer.name] = {
        name: customer.name,
        pointsPerMonth: { [GetMonth(customer.date)]: pointsEarned },
        total: pointsEarned,
      };
    }
  });

  return pointsObject;
};
