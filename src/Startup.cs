﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GitAttributesWeb.Utils;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using NWebsec.AspNetCore.Middleware;

namespace GitAttributesWeb
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            // Setup configuration sources.
            var configuration = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("config.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"config.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                configuration.AddApplicationInsightsSettings(developerMode: true);
            }

            configuration.AddEnvironmentVariables();

            this.Configuration = configuration.Build();
        }

        public IConfigurationRoot Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddApplicationInsightsTelemetry(Configuration);

            services.Configure<AppSettings>(Configuration.GetSection("AppSettings"));

            // Add MVC services to the services container.
            services.AddMvc();
            services.Configure<MvcOptions>(options =>
            {
                options.OutputFormatters.Clear();

                var textOutput = new StringOutputFormatter2();
                options.OutputFormatters.Add(textOutput);
            });

            services.AddSingleton<AppData>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(this.Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            // Add Application Insights monitoring to the request pipeline as a very first middleware.
            app.UseApplicationInsightsRequestTelemetry();

            // configure Content Security Policy policy
            app.UseCsp(options =>
            {
                options.DefaultSources(s => s.Self());
                options.StyleSources(s => s.Self().CustomSources("fonts.googleapis.com"));
                options.ScriptSources(s => s.Self().CustomSources("code.jquery.com"));
                options.FontSources(s => s.Self().CustomSources("fonts.googleapis.com", "fonts.gstatic.com"));

                options.ReportUris(s => s.Uris("https://goit.report-uri.io/r/default/csp/enforce"));
            });

            // configure X-Content-Type-Options policy
            app.UseXContentTypeOptions();

            // configure X-Frame-Options policy
            app.UseXfo(options => options.Deny());

            // configure X-XSS-Protection policy
            app.UseXXssProtection(options => options.EnabledWithBlockMode());

            // Add the following to the request pipeline only in development environment.
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                // configure HTTP Strict Transport Security policy
                app.UseHsts(options =>
                {
                    options.MaxAge(days: 30).IncludeSubdomains();
                });

                ////// configure HTTP Public Key Pinning policy
                ////app.UseHpkpReportOnly(options =>
                ////{
                ////    options.MaxAge(days: 30)
                ////           .Sha256Pins("OckhHQiygSnN1Rw3EX+AhE/pd3osjeGq2YuWT9UoDHI=")
                ////           .ReportUri("https://goit.report-uri.io/r/default/hpkp/reportOnly");
                ////});

                // Add Error handling middleware which catches all application specific errors and
                // send the request to the following path or controller action.
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseApplicationInsightsExceptionTelemetry();

            // Add static files to the request pipeline.
            app.UseStaticFiles();

            // Add MVC to the request pipeline.
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
