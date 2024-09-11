using System;

namespace GeometryLibrary.Figures
{
    public class Square : IShape
    {
        public double Side { get; }

        public Square(double side)
        {
            if (side <= 0) throw new ArgumentException("Side must be greater than zero");
            Side = side;
        }

        public double GetArea()
        {
            return Side * Side;
        }
    }
}
