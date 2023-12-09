package stringconcatenation;

public class StringConcatenation {

    private static final int NUMBER_ITERATIONS = 1000000;

    public static void main(String[] args) {

        concatenation();
        substitution();

    }

    private static void concatenation() {

        final long start = System.currentTimeMillis();

        @SuppressWarnings("unused") String word = ".";
        String fullstop = ".";
        for (int i = 0; i < NUMBER_ITERATIONS; i++) {
            //noinspection StringConcatenationInLoop
            word += fullstop; // string concatenation
        }

        final long end = System.currentTimeMillis();

        final double durationInSeconds = (end - start) / 1000.;
        System.out.println("Java Concate Duration: " + durationInSeconds + " s");
    }

    private static void substitution() {

        final long start = System.currentTimeMillis();

        String word = ".";
        String fullstop = ".";
        for (int i = 0; i < NUMBER_ITERATIONS; i++) {
            word = String.format("%s%s", word, fullstop); // string substitution
        }

        final long end = System.currentTimeMillis();

        final double durationInSeconds = (end - start) / 1000.;
        System.out.println("Java Substitute Duration: " + durationInSeconds + " s");
    }

}
