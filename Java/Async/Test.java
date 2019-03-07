import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Test {
    public static void main(String args[]) throws InterruptedException, ExecutionException {
        ExecutorService ioBound = Executors.newCachedThreadPool();
        CompletableFuture<String> cf = CompletableFuture.supplyAsync(() -> getDataById(10), ioBound)
                .thenApply(data -> sendData(data));
        cf.get();

        CompletableFuture<Void> allFutures = CompletableFuture.allOf(getGreeting("en"), getGreeting("es"));
    }

    private static String getDataById(int id) {
        System.out.println("getDataById: " + Thread.currentThread().getName());
        return "Data:" + id;
    }

    private static String sendData(String data) {
        System.out.println("sendData: " + Thread.currentThread().getName());
        System.out.println(data);
        return data;
    }

    private CompletableFuture<GreetHolder> getGreeting(String lang) {
        ExecutorService executor = Executors.newCachedThreadPool();
        return CompletableFuture.supplyAsync(() -> {
            try {
                log.info("Task execution started.");
                Thread.sleep(2000);
                log.info("Task execution stopped.");
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return new GreetHolder(getGreet(lang));
        }, executor).exceptionally(ex -> {
            log.error("Something went wrong : ", ex);
            return null;
        });
    }
}
