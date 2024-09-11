using System;

namespace GeometryLibrary.Figures
{
    public class Triangle : IShape
    {
        public double A { get; }
        public double B { get; }
        public double C { get; }

        public Triangle(double a, double b, double c)
        {
            if (a <= 0 || b <= 0 || c <= 0) throw new ArgumentException("Sides must be greater than zero");
            if (a + b <= c || a + c <= b || b + c <= a) throw new ArgumentException("Invalid triangle sides");

            A = a;
            B = b;
            C = c;
        }

        public double GetArea()
        {
            double s = (A + B + C) / 2;
            return Math.Sqrt(s * (s - A) * (s - B) * (s - C));
        }

        public bool IsRightAngled()
        {
            double[] sides = { A, B, C };
            Array.Sort(sides);
            return Math.Abs(sides[2] * sides[2] - (sides[0] * sides[0] + sides[1] * sides[1])) < 0.001;
        }
    }
}
