using GeometryLibrary.Figures;
using Xunit;

namespace GeometryLibrary.Tests
{
    public class ShapeFactoryTests
    {
        [Fact]
        public void CreateCircleTest()
        {
            // Arrange
            double radius = 5;

            // Act
            IShape shape = ShapeFactory.CreateCircle(radius);

            // Assert
            Assert.IsType<Circle>(shape);
        }

        [Fact]
        public void CreateTriangleTest()
        {
            // Arrange
            double a = 3, b = 4, c = 5;

            // Act
            IShape shape = ShapeFactory.CreateTriangle(a, b, c);

            // Assert
            Assert.IsType<Triangle>(shape);
        }

        [Fact]
        public void CreateSquareTest()
        {
            // Arrange
            double side = 4;

            // Act
            IShape shape = ShapeFactory.CreateSquare(side);

            // Assert
            Assert.IsType<Square>(shape);
        }
    }
}
