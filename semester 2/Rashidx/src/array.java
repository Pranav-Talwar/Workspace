import java.util.ArrayList;
import static java.lang.System.out;
public final class array{
    public static void main(String[] args) {
        ArrayList<Integer> x = new ArrayList<>();

        x.add(10);
        x.add(20);
        x.add(30);
        x.add(40);
        x.add(50);

        out.println("ArrayList elements: " + x);

        x.set(2, 35);
        out.println("After Changing the third element (index 2) to 35: " + x);

        x.remove(1);
        out.println("After removing the element at index 1: " + x);

        boolean y = x.contains(40);
        out.println("Checking if the value 40 is in the ArrayList  " + y);

        int b = x.size();
        out.println("Size of the ArrayList: " + b);
    }
}
