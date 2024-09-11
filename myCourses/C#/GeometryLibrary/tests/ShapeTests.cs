using GeometryLibrary.Figures;
using Xunit;

public class ShapeTests
{
    [Fact]
    public void CircleAreaTest()
    {
        var circle = new Circle(10);
        Assert.Equal(Math.PI * 100, circle.GetArea(), 5);
    }

    [Fact]
    public void TriangleAreaTest()
    {
        var triangle = new Triangle(3, 4, 5);
        Assert.Equal(6, triangle.GetArea(), 5);
    }

    [Fact]
    public void RightAngledTriangleTest()
    {
        var triangle = new Triangle(3, 4, 5);
        Assert.True(triangle.IsRightAngled());
    }

    [Fact]
    public void SquareAreaTest()
    {
        var square = new Square(4);
        Assert.Equal(16, square.GetArea(), 5);
    }
}
