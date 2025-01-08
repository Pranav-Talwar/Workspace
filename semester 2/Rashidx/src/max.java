import static java.lang.System.out;
public class max {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 20;
        out.println(findMax(num1, num2));

        int num3 = 15;
        int num4 = 15;
        out.print(findMax(num3, num4));

    }
    public static int findMax(int a, int b) {
        return a >= b ? a : b;  //easy way to write if else
    }

}
