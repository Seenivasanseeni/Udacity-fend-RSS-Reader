/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against RSS Reader  application.
 */

$(function() {
    describe('RSS Feeds', function() {
        /* This is a test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* It is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("All urls are non-empty",function(){
            expect(allFeeds).toBeDefined();
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe(''); 
            });
        })


        /* It is  a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it("All Names are non-empty",function(){
            expect(allFeeds).toBeDefined();
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(''); 
            });
        })



        });

      describe("The Menu",function(){
        /* It is  a test that ensures the menu element is
         * hidden by default. 
        */

        //menus visibilty can be found out using presence of menu-hidden class in body tag
        
        it("hidden by default",function(){
            expect($("body").hasClass("menu-hidden")).toBe(true);
          });

         /* It is a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it("toggles view on click",function(){
             //click and test whther the menu is not hidden
             var menuIcon=$(".menu-icon-link");
             menuIcon.trigger("click");                //on first click 
             expect($("body").hasClass("menu-hidden")).toBe(false);//meny should be revealed

             //click and test whether the meny is hidden
             menuIcon.trigger("click");                //on second click 
             expect($("body").hasClass("menu-hidden")).toBe(true);//menu should be hidden
             
            
         })
    });
    describe("Initial Entries",function(){
  
        /* It is a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done){
            loadFeed(0,done);
        });

        it("atleast one entry element inside feed container",function(done){
            expect($(".feed .entry").length>0).toBe(true);
            done();
        });

    });
    describe("New Feed Selection",function(){
        /* IT is a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var beforeContent;
        var afterContent;
         beforeEach(function(done){
            loadFeed(0,function(){
                beforeContent=$(".feed .entry")[0].innerText;
                done();
                loadFeed(1,function(){
                    afterContent=$(".feed .entry")[0].innerText;
                    done();
                });
            }); 
        });

        it("loadFeed changes Contents",function(done){
            expect(beforeContent).not.toBe(afterContent);
            done();
        })
    });
}());
