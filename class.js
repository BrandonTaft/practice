//Create a Polygon class that has the following properties:

//A constructor that takes an array of integer values describing the lengths of the polygon's sides.
//A perimeter() method that returns the polygon's perimeter.


class Polygon
{
    constructor(sides)
    {
        this.sides = sides;
    }

    perimeter()
    {
        var per = 0;
        for (var i = 0; i < this.sides.length; i++)
        {
            per += this.sides[i];
        }
        return per;
    }
}
