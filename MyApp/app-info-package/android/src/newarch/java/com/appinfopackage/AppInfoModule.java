package com.appinfopackage;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;

/**
 * Declare Java class for new arch native module implementation
 *
 * Each turbo module extends codegenerated spec class
 *
 * Class should be annotated with @ReactModule decorator
 */
@ReactModule(name = AppInfoModule.NAME)
public class AppInfoModule extends NativeAppInfoModuleSpec {
    public static final String NAME = AppInfoModuleImpl.NAME;

    // Use shared module implementation and forward react application context
    private final AppInfoModuleImpl moduleImpl;

    public AppInfoModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.moduleImpl = new AppInfoModuleImpl(reactContext);
    }

    // Return the name of the module - it should match the name provided in JS specification
    @Override
    public String getName() {
        return NAME;
    }

    // Exported methods are overriden - based on the spec class
    @Override
    public String getAppBuildNumber() {
        return moduleImpl.getAppBuildNumber();
    }

    @Override
    public String getAppBundleId() {
        return moduleImpl.getAppBundleId();
    }

    @Override
    public String getAppVersion() {
        return moduleImpl.getAppVersion();
    }
}