package ru.geekbrains.lesson7.singleton;

public class Settings {


    private static Settings instance;

    private String param1;

    private int param2;

    private boolean param3;

    public String getParam1() {
        return param1;
    }


    public int getParam2() {
        return param2;
    }

    public boolean isParam3() {
        return param3;
    }

    private Settings(String param1, int param2, boolean param3) {
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
    }

    public static Settings getInstance(){
        if (instance == null){
            instance = new Settings("AAA", 45, false);
        }
        return instance;
    }




}
