using GeometryLibrary;

class Program
{
    static void Main()
    {
        var circle = ShapeFactory.CreateCircle(5);
        Console.WriteLine($"Circle area: {circle.GetArea()}");

        var triangle = ShapeFactory.CreateTriangle(3, 4, 5);
        Console.WriteLine($"Triangle area: {triangle.GetArea()}");

        if (triangle is GeometryLibrary.Figures.Triangle t && t.IsRightAngled())
        {
            Console.WriteLine("The triangle is right-angled.");
        }

        var square = ShapeFactory.CreateSquare(4);
        Console.WriteLine($"Square area: {square.GetArea()}");
    }
}
