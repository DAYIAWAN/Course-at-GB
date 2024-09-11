using GeometryLibrary.Figures;
using Xunit;

namespace GeometryLibrary.Tests
{
    public class FiguresTests
    {
        [Fact]
        public void CircleAreaTest()
        {
            // Arrange
            double radius = 5;
            IShape circle = new Circle(radius);

            // Act
            double area = circle.GetArea();

            // Assert
            Assert.Equal(Math.PI * Math.Pow(radius, 2), area);
        }

        [Fact]
        public void TriangleAreaTest()
        {
            // Arrange
            double a = 3, b = 4, c = 5;
            IShape triangle = new Triangle(a, b, c);

            // Act
            double area = triangle.GetArea();

            // Assert
            double s = (a + b + c) / 2; // Полупериметр
            double expectedArea = Math.Sqrt(s * (s - a) * (s - b) * (s - c));
            Assert.Equal(expectedArea, area);
        }

        [Fact]
        public void TriangleIsRightTest()
        {
            // Arrange
            double a = 3, b = 4, c = 5;
            Triangle triangle = new Triangle(a, b, c);

            // Act
            bool isRight = triangle.IsRightTriangle();

            // Assert
            Assert.True(isRight);
        }

        [Fact]
        public void SquareAreaTest()
        {
            // Arrange
            double side = 4;
            IShape square = new Square(side);

            // Act
            double area = square.GetArea();

            // Assert
            Assert.Equal(side * side, area);
        }
    }
}
