using GeometryLibrary.Figures;

namespace GeometryLibrary
{
    public static class ShapeFactory
    {
        public static IShape CreateCircle(double radius)
        {
            return new Circle(radius);
        }

        public static IShape CreateTriangle(double a, double b, double c)
        {
            return new Triangle(a, b, c);
        }

        public static IShape CreateSquare(double side)
        {
            return new Square(side);
        }
    }
}
